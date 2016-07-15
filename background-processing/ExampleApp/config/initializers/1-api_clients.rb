AWS_S3_CLIENT = Aws::S3::Client.new(
  region: "us-standard",
  credentials: Aws::Credentials.new(
    Rails.application.secrets.aws_access_key,
    Rails.application.secrets.aws_secret_key
  )
)
