use reqwest::multipart::Form;
use crate::client::HttpClient;
use crate::errors::FailRequest;
use serde::{Deserialize, Serialize};
use serde_json::json;
use tauri::State;
use uuid::Uuid;

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Product {
    id: Uuid,
    name: String,
}

#[tauri::command]
pub async fn products(client: State<'_, HttpClient>) -> Result<Vec<Product>, FailRequest> {
    let res = client.get("http://100.77.238.23:3650/products")
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
    let _res = client.post("http://100.77.238.23:3650/products")
        .multipart(form)
        .send()
        .await
        .map_err(|e| {
            eprintln!("{:?}", e);
            FailRequest {}
        })?;

    Ok(())
}

#[derive(Deserialize, Serialize)]
pub struct UpdateProduct {
    name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    path: Option<String>
}

#[tauri::command]
pub async fn update_product(id: Uuid, update: UpdateProduct, client: State<'_, HttpClient>) -> Result<(), FailRequest> {
    client.post(format!("http://100.77.238.23:3650/products?id={id}"))
        .json(&json!({ "name": update.name }))
        .send()
        .await
        .map_err(|e| {
            eprintln!("{:?}", e);
            FailRequest {}
        })?;

    if let Some(path) = update.path {
        let form = Form::new()
            .file("image", path)
            .await
            .map_err(|e| {
                eprintln!("{:?}", e);
                FailRequest {}
            })?;
        client.post(format!("http://100.77.238.23:3650/contents?id={id}"))
            .multipart(form)
            .send()
            .await
            .map_err(|e| {
                eprintln!("{:?}", e);
                FailRequest {}
            })?;
    }
    Ok(())
}

#[tauri::command]
pub async fn delete_product(id: Uuid, client: State<'_, HttpClient>) -> Result<(), FailRequest> {
    client.delete(format!("http://100.77.238.23/products?id={id}"))
        .send()
        .await
        .map_err(|e| {
            eprintln!("{:?}", e);
            FailRequest {}
        })?;

    Ok(())
}