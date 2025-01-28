use serde::{Deserialize, Serialize};
use std::cmp::Ordering;
use std::fmt::Display;
use uuid::Uuid;

#[derive(Debug, Copy, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct CategoryId(Uuid);

impl Display for CategoryId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Category {
    id: CategoryId,
    name: String,
    ordering: i64,
}

impl Eq for Category {}

impl PartialEq for Category {
    fn eq(&self, other: &Self) -> bool {
        self.id.eq(&other.id)
    }
}

impl PartialOrd for Category {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for Category {
    fn cmp(&self, other: &Self) -> Ordering {
        self.ordering.cmp(&other.ordering)
    }
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct OrderedCategory {
    id: CategoryId,
    ordering: i64,
}

impl Eq for OrderedCategory {}

impl PartialEq for OrderedCategory {
    fn eq(&self, other: &Self) -> bool {
        self.id.eq(&other.id)
    }
}

impl PartialOrd for OrderedCategory {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for OrderedCategory {
    fn cmp(&self, other: &Self) -> Ordering {
        self.ordering.cmp(&other.ordering)
    }
}


pub mod commands {
    use super::OrderedCategory;
    use crate::models::products::{OrderedProduct, ProductId};
    use serde::{Deserialize, Serialize};
    use std::collections::BTreeSet;
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct CreateCategory {
        name: String
    }
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct UpdateCategory {
        name: String
    }
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct ChangeOrdering(BTreeSet<OrderedCategory>);
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct AddProduct {
        product: ProductId
    }
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct RemoveProduct {
        product: ProductId
    }
    
    #[derive(Debug, Clone, Deserialize, Serialize)]
    pub struct ChangeOrderingProduct(BTreeSet<OrderedProduct>);
}
