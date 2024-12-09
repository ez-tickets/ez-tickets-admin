use std::ops::Deref;
use error_stack::{Report, ResultExt};
use reqwest::Client;
use crate::errors::UnRecoverableError;

#[derive(Debug, Clone)]
pub struct HttpClient(Client);

impl Deref for HttpClient {
    type Target = Client;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl HttpClient {
    pub fn new() -> Result<Self, Report<UnRecoverableError>> {
        let client = Client::builder().build()
            .change_context_lazy(|| UnRecoverableError)?;
        Ok(Self(client))
    }
}
