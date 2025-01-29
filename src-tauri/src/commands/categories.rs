use std::collections::BTreeSet;
use tauri::State;

use crate::client::HttpClient;
use crate::errors::FailRequest;
use crate::models::categories::{Category, CategoryId};
use crate::models::categories::commands::{ChangeOrdering, ChangeOrderingProduct, CreateCategory, UpdateCategory};
use crate::models::products::{OrderedProduct, OrderedProductDetails, ProductId};

// noinspection DuplicatedCode
#[tauri::command]
pub async fn get_categories(client: State<'_, HttpClient>) -> Result<BTreeSet<Category>, FailRequest> {
    match client.get("http://100.77.238.23:3650/categories")
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
            
            match res.json::<BTreeSet<Category>>().await {
                Ok(categories) => Ok(categories),
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn create_category(
    create: CreateCategory,
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.post("http://100.77.238.23:3650/categories")
        .json(&create)
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn update_category(
    id: CategoryId,
    update: UpdateCategory,
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.patch(format!("http://100.77.238.23:3650/categories/{id}"))
        .json(&update)
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn change_ordering_categories(
    new: ChangeOrdering,
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.put("http://100.77.238.23:3650/categories")
        .json(&new)
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn delete_category(
    delete: CategoryId,
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.delete(format!("http://100.77.238.23:3650/categories/{delete}"))
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn get_products_in_category(
    id: CategoryId,
    client: State<'_, HttpClient>
) -> Result<BTreeSet<OrderedProductDetails>, FailRequest> {
    match client.get(format!("http://100.77.238.23:3650/categories/{id}"))
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
            
            match res.json::<BTreeSet<OrderedProductDetails>>().await {
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn add_product_to_category(
    id: CategoryId,
    product: OrderedProduct,
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.post(format!("http://100.77.238.23:3650/categories/{id}"))
        .json(&product)
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn remove_product_from_category(
    id: CategoryId,
    product: ProductId,
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.delete(format!("http://100.77.238.23:3650/categories/{id}/{product}"))
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

// noinspection DuplicatedCode
#[tauri::command]
pub async fn change_ordering_product_in_category(
    id: CategoryId,
    new: ChangeOrderingProduct,
    client: State<'_, HttpClient>
) -> Result<(), FailRequest> {
    match client.put(format!("http://100.77.238.23:3650/categories/{id}"))
        .json(&new)
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