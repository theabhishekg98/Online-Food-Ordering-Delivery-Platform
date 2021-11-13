import S3 from 'react-aws-s3';

const config = {
    bucketName: 'ubereats-img',
    dirName: 'media', /* optional */
    region: 'us-east-2',
    accessKeyId: 'AKIAUHYZFVUEYPQBM6NJ',
    secretAccessKey: 'wLiv9Al3V5NpecCycseu4nTVg4IlVzfLxv50JTFh'
    // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}

export default function uploadToS3(imageData, fileName) {
const ReactS3Client = new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
/* This is optional */
ReactS3Client
    .uploadFile(imageData, fileName)
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
