# Design assistant

App that helps create colour palette and download free heigh resoulations images

## Features

- Responsiveness on different devices
- create colors schemas
- search for images and download it

## Installation

Install my-project with npm

```bash
git clone https://github.com/AhmedNagii/Design-assistant.git
npm install
cd Design-assistant
npm run dev
```

## Demo

https://design-assistent.onrender.com/

## API Reference

#### Get all items

```http
  GET /api/photos
  https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/colors/
  https://www.thecolorapi.com/scheme?hex=COLOR-IN-HEX
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `hex`     | `string` | **Required**. color in hex form |
