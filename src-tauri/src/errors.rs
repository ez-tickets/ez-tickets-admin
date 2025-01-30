use serde::Serialize;

#[derive(Debug, Serialize, thiserror::Error)]
#[error("An unrecoverable error occurred...")]
pub struct UnrecoverableError;

#[derive(Debug, Serialize, thiserror::Error)]
#[error("")]
pub struct FailRequest;

#[derive(Debug, Serialize, thiserror::Error)]
#[error("Failed to read file")]
pub struct FailedReadFile;