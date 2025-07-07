import * as FileSystem from 'expo-file-system';

/**
 * Ensures the image is a file URI for Firebase upload.
 * If the input is a data URL (base64), saves it as a temp file and returns the file URI.
 * If already a file URI, returns as is.
 * @param {string} imageUri - Can be file:///... or data:image/...;base64,...
 * @returns {Promise<string>} file URI
 */
export async function saveImageForFirebase(imageUri) {
  if (imageUri.startsWith('file://')) {
    return imageUri;
  }
  const match = imageUri.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!match) throw new Error('Invalid image URI format');
  const mime = match[1];
  const base64Data = match[2];
  const ext = mime.split('/')[1] || 'jpg';
  const tempFileUri = FileSystem.cacheDirectory + `firebase-upload-${Date.now()}.${ext}`;
  await FileSystem.writeAsStringAsync(tempFileUri, base64Data, { encoding: FileSystem.EncodingType.Base64 });
  return tempFileUri;
}
