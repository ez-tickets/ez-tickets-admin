use std::cmp::Ordering;
use std::collections::BTreeSet;
use serde::{Deserialize, Serialize};
use tauri::State;
use crate::client::HttpClient;
use crate::errors::FailRequest;

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Category {
    id: i32,
    name: String,
    #[serde(rename = "ordering")]
    order: i32,
}

impl Eq for Category {}

impl PartialEq<Self> for Category {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

impl PartialOrd<Self> for Category {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for Category {
    fn cmp(&self, other: &Self) -> Ordering {
        self.order.cmp(&other.order)
            .then_with(|| self.name.cmp(&other.name))
    }
}

#[tauri::command]
pub async fn categories(client: State<'_, HttpClient>) -> Result<BTreeSet<Category>, FailRequest> {
    client.get("http://100.77.238.23:3650/categories").send().await
        .map_err(|e| {
            eprintln!("Error: {:?}", e);
            FailRequest {}
        })?
        .json::<BTreeSet<Category>>().await
        .map_err(|e| {
            eprintln!("Error: {:?}", e);
            FailRequest {}
        })
}