use serde::Serialize;

#[derive(Debug, Serialize, thiserror::Error)]
#[error("An unrecoverable error occurred...")]
pub struct UnRecoverableError;

#[derive(Debug, Serialize, thiserror::Error)]
#[error("")]
pub struct FailRequest {

}