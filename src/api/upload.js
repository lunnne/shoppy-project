import axios from 'axios'

export async function uploadFile(image) {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
    data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    return  axios
    .post(process.env.REACT_APP_CLOUDINARY_URL, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)
}