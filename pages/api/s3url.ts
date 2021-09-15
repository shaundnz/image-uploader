import {NextApiRequest, NextApiResponse} from "next";
import aws from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid';

const region = "ap-southeast-2"
const bucketName = "imageuploadapp"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "v4"
  })

  const params = ({
    Bucket: bucketName,
    Key: uuidv4(),
    Expires: 60
  })

  const signedUploadURL = await s3.getSignedUrlPromise('putObject', params)

  return res.status(200).json(signedUploadURL)
};