# API Reference

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Zuperix Public API follows REST principles and uses JSON for most responses. All requests must be made over HTTPS.

## 📤 Upload Asset

Add a file to your workspace programmatically.

- **Endpoint**: `POST /public/assets/upload`
- **Content-Type**: `multipart/form-data`
- **Required Scopes**: `asset.add` or `all`
*(Note: API Keys are intrinsically tied to a specific Workspace, so you do not need to provide `workspace_id`.)*

### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `file` | `Buffer` | The raw file bytes to upload. |
| `category_ids` | `UUID[]` (Optional) | A list of category UUIDs to assign to the asset. |
| `collection_ids` | `UUID[]` (Optional) | A list of collection UUIDs to add the asset to. |

### Curls Example

```bash
curl -X POST https://api.zuperix.com/public/assets/upload \
  -H "x-api-key: your-api-key" \
  -F "file=@/path/to/image.jpg"
```

## 🔍 Search Assets

Zuperix primarily supports **POST** requests for search, as it allows for deeply complex JSON payloads with arrays and semantic flags.

- **Endpoint**: `POST /search`
- **Required Scopes**: `search:read` or `all`

### Query Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `q` | `string` | Your search keywords or advanced search syntax. |
| `limit` | `number` | The maximum number of results to return (max 500). |
| `page` | `number` | The page number for pagination. |
| `mime_type` | `string[]` | Filter by file types (e.g., `image/jpeg`). |
| `is_semantic` | `boolean` | If true, uses AI visual similarity matching (Silver/Gold plans). |

### 10 Search Examples (Simple to Complex)

**1. Simple Keyword Search**
*Basic fuzzy search.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"sunset"}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"sunset"})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "sunset"
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"sunset"}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"sunset\"}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"sunset"}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**2. Exact Mime Type**
*Find images.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"sunset","mime_type":["image/jpeg"]}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"sunset","mime_type":["image/jpeg"]})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "sunset",
    "mime_type": [
        "image/jpeg"
    ]
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"sunset","mime_type":["image/jpeg"]}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"sunset\",\"mime_type\":[\"image/jpeg\"]}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"sunset","mime_type":["image/jpeg"]}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**3. Semantic AI Search**
*Deep CLIP search.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"red car","is_semantic":true}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"red car","is_semantic":true})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "red car",
    "is_semantic": True
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"red car","is_semantic":true}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"red car\",\"is_semantic\":true}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"red car","is_semantic":true}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**4. Tag Match**
*Find tagged items.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"tag:campaign"}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"tag:campaign"})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "tag:campaign"
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"tag:campaign"}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"tag:campaign\"}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"tag:campaign"}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**5. Size Filter**
*Files over 5MB.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"size:>5mb"}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"size:>5mb"})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "size:>5mb"
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"size:>5mb"}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"size:>5mb\"}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"size:>5mb"}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**6. Date Filter**
*Created recently.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"created:7d"}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"created:7d"})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "created:7d"
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"created:7d"}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"created:7d\"}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"created:7d"}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**7. Logical Operations**
*Combine filters.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"trees AND tag:nature"}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"trees AND tag:nature"})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "trees AND tag:nature"
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"trees AND tag:nature"}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"trees AND tag:nature\"}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"trees AND tag:nature"}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**8. Exclusion Filters**
*Remove videos.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"(trees OR mountains) AND NOT type:video"}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"(trees OR mountains) AND NOT type:video"})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "(trees OR mountains) AND NOT type:video"
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"(trees OR mountains) AND NOT type:video"}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"(trees OR mountains) AND NOT type:video\"}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"(trees OR mountains) AND NOT type:video"}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**9. Complex Aggregation**
*Multiple fields.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"type:image AND size:>10mb AND created:7d"}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"type:image AND size:>10mb AND created:7d"})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "type:image AND size:>10mb AND created:7d"
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"type:image AND size:>10mb AND created:7d"}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"type:image AND size:>10mb AND created:7d\"}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"type:image AND size:>10mb AND created:7d"}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

**10. OCR Search**
*Search text within files.*

<Tabs groupId="language">
<TabItem value="curl" label="👨‍💻 cURL" default>

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"q":"ocr:revenue AND size:<50mb","limit":50,"page":1}'
```
</TabItem>
<TabItem value="node" label="🟢 Node.js">

```javascript
const res = await fetch("https://api.zuperix.com/search", {
  method: "POST",
  headers: { "x-api-key": "your-api-key", "Content-Type": "application/json" },
  body: JSON.stringify({"q":"ocr:revenue AND size:<50mb","limit":50,"page":1})
});
console.log(await res.json());
```
</TabItem>
<TabItem value="python" label="🐍 Python">

```python
import requests
res = requests.post("https://api.zuperix.com/search", headers={"x-api-key": "your-api-key"}, json={
    "q": "ocr:revenue AND size:<50mb",
    "limit": 50,
    "page": 1
})
print(res.json())
```
</TabItem>
<TabItem value="php" label="🐘 PHP">

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.zuperix.com/search",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => '{"q":"ocr:revenue AND size:<50mb","limit":50,"page":1}',
  CURLOPT_HTTPHEADER => ["x-api-key: your-api-key", "Content-Type: application/json"],
]);
echo curl_exec($curl);
?>
```
</TabItem>
<TabItem value="java" label="☕ Java">

```java
HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://api.zuperix.com/search"))
  .header("x-api-key", "your-api-key").header("Content-Type", "application/json")
  .POST(HttpRequest.BodyPublishers.ofString("{\"q\":\"ocr:revenue AND size:<50mb\",\"limit\":50,\"page\":1}"))
  .build();
HttpResponse<String> res = HttpClient.newHttpClient().send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```
</TabItem>
<TabItem value="go" label="🐹 Go">

```go
req, _ := http.NewRequest("POST", "https://api.zuperix.com/search", bytes.NewBuffer([]byte(`{"q":"ocr:revenue AND size:<50mb","limit":50,"page":1}`)))
req.Header.Add("x-api-key", "your-api-key")
req.Header.Add("Content-Type", "application/json")
resp, _ := (&http.Client{}).Do(req)
body, _ := io.ReadAll(resp.Body)
fmt.Println(string(body))
```
</TabItem>
</Tabs>

### JSON Response Body

```json
{
  "results": [],
  "pagination": { "total_results": 125, "total_pages": 7, "page": 1 }
}
```

---

## 🗑️ Delete Asset

Permanently remove an asset from your workspace.

- **Endpoint**: `DELETE /public/assets/:id`
- **Required Scopes**: `asset.delete` or `all`

### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | The UUID of the asset to delete. |

---

## 🚦 Error Codes

| Status | Description |
| :--- | :--- |
| `400 Bad Request` | One or more parameters are missing or invalid. |
| `401 Unauthorized` | Invalid or missing API key. |
| `403 Forbidden` | Insufficient scopes or plan restrictions. |
| `404 Not Found` | The requested asset or workspace doesn't exist. |
| `429 Too Many Requests` | You have exceeded your rate limits. |
