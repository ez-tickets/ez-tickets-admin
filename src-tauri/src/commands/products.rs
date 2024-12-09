use reqwest::multipart::Form;
use crate::client::HttpClient;
use crate::errors::FailRequest;
use serde::{Deserialize, Serialize};
use tauri::State;
use uuid::Uuid;

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Product {
    id: Uuid,
    name: String,
}

#[tauri::command]
pub async fn products(client: State<'_, HttpClient>) -> Result<Vec<Product>, FailRequest> {
    let res = client.get("http://localhost:3650/products")
        .send()
        .await
        .map_err(|e| {
            eprintln!("Error: {:?}", e);
            FailRequest {}
        })?;

    let res = res.json::<Vec<Product>>().await
        .map_err(|e| {
            eprintln!("Error: {:?}", e);
            FailRequest {}
        })?;

    Ok(res)
}

#[derive(Debug, Clone, Deserialize)]
pub struct RegisterProduct {
    name: String,
    path: String
}

#[tauri::command]
pub async fn register_product(register: RegisterProduct, client: State<'_, HttpClient>) -> Result<(), FailRequest> {
    let form = Form::new()
        .text("name", register.name)
        .file("image", register.path)
        .await
        .map_err(|e| {
            eprintln!("{:?}", e);
            FailRequest {}
        })?;
    let _res = client.post("http://localhost:3650/products")
        .multipart(form)
        .send()
        .await
        .map_err(|e| {
            eprintln!("{:?}", e);
            FailRequest {}
        })?;

    Ok(())
}