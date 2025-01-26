use std::cmp::Ordering;
use std::fmt::{Display, Formatter};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Copy, Clone, Eq, PartialEq, Deserialize, Serialize)]
pub struct ProductId(Uuid);

impl Display for ProductId {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Product {
    pub id: ProductId,
    pub name: String,
    pub price: i64
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct ProductDetails {
    pub id: ProductId,
    pub name: String,
    pub desc: String,
    pub price: i64
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct OrderedProductWithName {
    id: ProductId,
    name: String,
    ordering: i64,
}

impl Eq for OrderedProductWithName {}

impl PartialEq for OrderedProductWithName {
    fn eq(&self, other: &Self) -> bool {
        self.id.eq(&other.id)
    }
}

impl Ord for OrderedProductWithName {
    fn cmp(&self, other: &Self) -> Ordering {
        self.ordering.cmp(&other.ordering)
    }
}

impl PartialOrd for OrderedProductWithName {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct OrderedProduct {
    id: ProductId,
    ordering: i64
}

impl Eq for OrderedProduct {}

impl PartialEq for OrderedProduct {
    fn eq(&self, other: &Self) -> bool {
        self.id.eq(&other.id)
    }
}

impl Ord for OrderedProduct {
    fn cmp(&self, other: &Self) -> Ordering {
        self.ordering.cmp(&other.ordering)
    }
}

impl PartialOrd for OrderedProduct {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

pub mod commands {
    use error_stack::{Report, ResultExt};
    use reqwest::multipart::Form;
    use serde::{Deserialize, Serialize};
    use crate::errors::FailedReadFile;
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct RegisterProduct {
        name: String,
        desc: String,
        price: i64,
        path: String
    }
    
    impl RegisterProduct {
        pub async fn into_form(self) -> Result<Form, Report<FailedReadFile>> {
            Form::new()
                .text("name", self.name)
                .text("desc", self.desc)
                .text("price", self.price.to_string())
                .file("image", self.path)
                .await
                .change_context_lazy(|| FailedReadFile)
        }
    }
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct UpdateProduct {
        name: Option<String>,
        desc: Option<String>,
        price: Option<i64>,
        path: Option<String>
    }
    
    impl UpdateProduct {
        pub async fn into_form(self) -> Result<Form, Report<FailedReadFile>> {
            let mut form = Form::new();
            if let Some(name) = self.name {
                form = form.text("name", name);
            }
            if let Some(desc) = self.desc {
                form = form.text("desc", desc);
            }
            if let Some(price) = self.price {
                form = form.text("price", price.to_string())
            }
            if let Some(path) = self.path {
                form = form.file("image", path).await
                    .change_context_lazy(|| FailedReadFile)?;
            }
            
            Ok(form)
        }
    }
}