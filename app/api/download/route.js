import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
 try{
  const { searchParams } = new URL(req.url);
  const link = searchParams.get('link');
  console.log(link);
  const apiUrl = `https://api.threadsdownloader.io/load?url=${link}`;
  const response = await axios.get(apiUrl);
  const videoUrl = response.data.media[0].url;
  return NextResponse.json({success : true , url : videoUrl});
 }catch (error) {
    console.error('Error downloading video:', error);
    return NextResponse.json({ success : false ,  error: 'Failed to download video' });
  }
}
