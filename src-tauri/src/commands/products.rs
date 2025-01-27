use tauri::State;

use crate::client::HttpClient;
use crate::errors::FailRequest;
use crate::models::products::commands::{RegisterProduct, UpdateProduct};
use crate::models::products::{Product, ProductDetails, ProductId};

//noinspection DuplicatedCode
#[tauri::command]
pub async fn get_products(client: State<'_, HttpClient>) -> Result<Vec<Product>, FailRequest> {
    match client.get("http://100.77.238.23:3650/products")
        .send()
        .await
    {
        Ok(res) => {
            if res.status().is_client_error() {
                tracing::error!("Data was successfully sent to the server, but the data format, etc. may be incorrect.");
                return Err(FailRequest);
            } else if res.status().is_server_error() {
                tracing::error!("The server encountered an error while processing the data.");
                return Err(FailRequest);
            }
            
            match res.json::<Vec<Product>>().await {
                Ok(products) => Ok(products),
                Err(e) => {
                    tracing::error!("{e:?}");
                    Err(FailRequest)
                }
            }
        }
        Err(e) => {
            tracing::error!("{e:?}");
            Err(FailRequest)
        }
    }
}

//noinspection DuplicatedCode
#[tauri::command]
pub async fn get_product_details(id: ProductId, client: State<'_, HttpClient>) -> Result<ProductDetails, FailRequest> {
    match client.get(format!("http://100.77.238.23:3650/products/{id}"))
        .send()
        .await
    {
        Ok(res) => {
            if res.status().is_client_error() {
                tracing::error!("Data was successfully sent to the server, but the data format, etc. may be incorrect.");
                return Err(FailRequest);
            } else if res.status().is_server_error() {
                tracing::error!("The server encountered an error while processing the data.");
                return Err(FailRequest);
            }
            
            match res.json::<ProductDetails>().await {
                Ok(product) => Ok(product),
                Err(e) => {
                    tracing::error!("{e:?}");
                    Err(FailRequest)
                }
            }
        }
        Err(e) => {
            tracing::error!("{e:?}");
            Err(FailRequest)
        }
    }
}


//noinspection DuplicatedCode
#[tauri::command]
pub async fn register_product(register: RegisterProduct, client: State<'_, HttpClient>) -> Result<(), FailRequest> {
    let form = match register.into_form().await {
        Ok(form) => form,
        Err(e) => {
            tracing::error!("{e:?}");
            return Err(FailRequest);
        }
    };
    
    match client.post("http://100.77.238.23:3650/products")
        .multipart(form)
        .send()
        .await
    {
        Ok(res) => {
            if res.status().is_client_error() {
                tracing::error!("Data was successfully sent to the server, but the data format, etc. may be incorrect.");
                return Err(FailRequest);
            } else if res.status().is_server_error() {
                tracing::error!("The server encountered an error while processing the data.");
                return Err(FailRequest);
            }
            
            Ok(())
        }
        Err(e) => {
            tracing::error!("{e:?}");
            Err(FailRequest)
        }
    }
}


//noinspection DuplicatedCode
#[tauri::command]
pub async fn update_product(id: ProductId, update: UpdateProduct, client: State<'_, HttpClient>) -> Result<(), FailRequest> {
    let form = match update.into_form().await {
        Ok(form) => form,
        Err(e) => {
            tracing::error!("{e:?}");
            return Err(FailRequest);
        }
    };
    
    match client.patch(format!("http://100.77.238.23:3650/products/{id}"))
        .multipart(form)
        .send()
        .await
    {
        Ok(res) => {
            if res.status().is_client_error() {
                tracing::error!("Data was successfully sent to the server, but the data format, etc. may be incorrect.");
                return Err(FailRequest);
            } else if res.status().is_server_error() {
                tracing::error!("The server encountered an error while processing the data.");
                return Err(FailRequest);
            }
            
            Ok(())
        }
        Err(e) => {
            tracing::error!("{e:?}");
            Err(FailRequest)
        }
    }
}

//noinspection DuplicatedCode
#[tauri::command]
pub async fn delete_product(
    id: ProductId, 
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.delete(format!("http://100.77.238.23:3650/products/{id}"))
        .send()
        .await
    {
        Ok(res) => {
            if res.status().is_client_error() {
                tracing::error!("Data was successfully sent to the server, but the data format, etc. may be incorrect.");
                return Err(FailRequest);
            } else if res.status().is_server_error() {
                tracing::error!("The server encountered an error while processing the data.");
                return Err(FailRequest);
            }
            
            Ok(())
        }
        Err(e) => {
            tracing::error!("{e:?}");
            Err(FailRequest)
        }
    }
}