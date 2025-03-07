---
title: 'Storage'
sidebar_position: 7
---

Nhost stores and serves files of any type in your backend.

The metadata for files hosted on Nhost is available in the `storage.files` table of your database, and thus is also accessible in the GraphQL API. This allows you to fetch a list of files to display in your frontend, for example.

---

## Buckets

Buckets are used to organize files and group permissions for files. Buckets are stored in the `storage.buckets` table in your database, and accessible via `buckets` in your GraphQL API.

Buckets are a way to segment permissions for file type, minimum and maximum file size, cache control, download expiration, and if pre-signed URLs are allowed.

---

## Permissions

Upload, read and delete permissions for files are managed through Hasura's permission system, just like other permissions.

### Upload

To upload a file, a user must have the `insert` permission to the `storage.files` table. The following columns must be checked:

- `id`
- `bucket_id`
- `name`
- `mime_type`

### Select

To read and download a file, a user must have the `select` permission to the `storage.files` table. Only the `id` column is required, but as a best practice you should allow reading all columns.

### Delete

To delete a file, a user must have the `delete` permission to the `storage.files` table.

> Updating an existing file is not supported. Delete and upload a new file instead.

---

## Accessing files

To access a file, make an HTTP GET request to `/v1/storage/files/{id}` with the `Authorization` header set with the access token returned by Nhost Auth. Alternatively, you can create a pre-signed URL by making an HTTP GET request to `/v1/storage/files/{id}/presignedurl` with the `Authorization` header set with the access token returned by Nhost Auth.

If the file is publicly accessible, there is no need to set the `Authorization` header. The file is publicly accessible if the permission for the `public` role is set to allow reading the file metadata in Hasura for the `storage.files` table.

### Pre-signed URL

A pre-signed URL is a unique URL that is used to access the file. Anyone with the pre-signed URL can access the file without exceptions. The URL is generated by Nhost Storage API and is valid for a limited time. The time limit of the pre-signed URL is determined by the `download_expiration` column in the bucket where the file is.

Using pre-signed URL is a good way to share files to people who don't have access to the file directly, or to access the file without setting the `Authorization` headers, for example when displaying the file in an `img` tag.

## Example with GraphQL

Let's say we're building a CRM and we want to store files for each customer.

In our CRM, we have the following two tables:

- `customers`
  - `id`
  - `name`
  - `address`
- `customer_files`
  - `id`
  - `customer_id` (foreign key to `customers.id`)
  - `file_id` (foreign key to `storage.files.id`)

We also have created relationships between `customers` and `customer_files` and between `customer_files` and `storage.files`.

We can now query the data with the following query:

```graphql
query {
  customer {
    # customer table
    id
    name
    customer_files {
      # customer_files table
      id
      file {
        # storage.files table
        id
        name
        size
        mime_type
      }
    }
  }
}
```

To upload a file, this is what we do;

1. Upload a file
2. Get the `id` of the file. The server returns this.
3. Insert the `id` of the file together with the customer's id into the `customer_files` table.
