# file-upload-project-
 a full-stack file upload project with .NET backend and Angular frontend is a classic enterprise-style setup. Let’s outline the structure and give you starter code for both ends.
## Features
- Angular frontend for file selection and upload
- ASP.NET Core backend API for handling uploads
- Azure Blob Storage integration for storing files

## Setup
1. Configure Azure Storage connection string in `AzureStorageService.cs`.
2. Run backend:
   ```bash
   dotnet run

# Workflow- User selects a file in Angular UI.
- File is sent to .NET API.
- API uploads file to Azure Blob Storage.
- Blob URL is returned to frontend.

