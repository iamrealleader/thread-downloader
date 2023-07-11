"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(`/api/download?link=${link}`);
      let data = await response.json();

      if (data.success) {
        const link = document.createElement('a');
        link.href = data.url;
        link.download = 'video.mp4';
        link.click();
      } else {
        console.error('Error downloading video:', response.statusText);
        // Handle error case
      }

    } catch (error) {
      console.error('Error downloading video:', error);
    }

    setIsLoading(false);
  };

  return (
    <>
    <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="head_text text-center">
          Download & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient my-10 text-center">
            Amazing Thread Videos
          </span>
        </h1>
        <p className="desc text-center">
          Downloader8ks is an open-source Thread downloading website for dowloading instagram thread posts and thread or videos.
        </p>

        <form onSubmit={handleFormSubmit} className="flex items-center my-5 md:my-8 w-[20rem] md:w-[40rem]">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input name="search" type="input" value={link} onChange={(e) => setLink(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Download any instagram thread video" required />
          </div>
          <button type="submit" className="ml-2 text-sm font-medium text-white rounded-lg bg-[#61d20e] hover:bg-green-500 outline-none ">
            { isLoading ?
             <Image className='text-red-300 bg-green-500 rounded-full' src="/loader.svg" width={45} height={45} alt="..."/> :
             <svg className='p-1' fill="none" viewBox="0 0 24 24" height="2.5rem" width="2.5rem">
               <path fill="currentColor" d="M11 5a1 1 0 112 0v7.158l3.243-3.243 1.414 1.414L12 15.986 6.343 10.33l1.414-1.414L11 12.158V5z" />
               <path fill="currentColor" d="M4 14h2v4h12v-4h2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z"/>
             </svg>
                  }
          </button>
        </form>
      </div>
      <div className="add w-full h-32 md:40"></div>
      <div className="how mx-10 my-5 md:my-10">
        <h1 className="heading font-bold text-2xl my-2">How it works?</h1>
        <div className="steps my-2 text-white bg-blue-500 font-bold w-20 h-8 rounded-3xl flex justify-center items-center">Step 1</div>
        <div className="step ml-5">Copy Url Instagram Thread Videos</div>
        <div className="steps my-2 text-white bg-blue-500 font-bold w-20 h-8 rounded-3xl flex justify-center items-center">Step 2</div>
        <div className="step ml-5">Paste the URL into the Downloader8k - Instagram Thread downloader in the text box area above.</div>
        <div className="steps my-2 text-white bg-blue-500 font-bold w-20 h-8 rounded-3xl flex justify-center items-center">Step 3</div>
        <div className="step ml-5">Hit the Download button for Instagram Thread Video Download.</div>
      </div>

      <div className="about m-10" id="about">
        <h1 className="font-bold text-xl">About</h1>
        <p>Downloader8k is a user-friendly web application that simplifies the process of downloading videos from Instagram threads. With Downloader8k, you can easily download multiple videos from a thread without the need for any complicated steps or technical expertise. By simply pasting the link of the Instagram thread into the provided input field and clicking the Download button, Downloader8k utilizes its built-in API to extract the video URLs from the thread. It then generates convenient download links for each video, allowing you to effortlessly save them to your device. The web app is designed to be intuitive and accessible, catering to users of all experience levels. It is completely free to use, eliminating any financial barriers. With Downloader8k, you can enjoy the convenience of downloading Instagram thread videos hassle-free, whether you are using a desktop computer, laptop, smartphone, or tablet. Experience the joy of watching your favorite Instagram thread videos offline at your convenience, all with the help of Downloader8k.</p>
      </div>

      <div className="mx-5 my-10 md:mx-10 about-section">
        <h1 className="font-bold my-3 text-2xl">FAQs</h1>
        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">What is Downloader8k?</summary>
          <p className="section-description mt-2 px-4 py-2">
            Downloader8k is a web app that allows you to easily download videos from Instagram threads. It simplifies the process of downloading multiple videos from a thread by automating the extraction of video URLs and providing direct download links. Simply paste the link to the Instagram thread containing the videos you want to download, and Downloader8k will retrieve the video URLs for you to download effortlessly.
          </p>
        </details>

        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">How does it work?</summary>
          <p className="section-description mt-2 px-4 py-2">
            Downloader8k works by utilizing an API specifically designed to fetch video URLs from Instagram threads. When you paste the link to the desired thread and click the Download button, Downloader8k communicates with the API to extract the video URLs. It then generates download links for each video, allowing you to download them with a simple click. Downloader8k streamlines the process of downloading Instagram thread videos, saving you time and effort.
          </p>
        </details>

        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">Is it free?</summary>
          <p className="section-description mt-2 px-4 py-2">
            Yes, Downloader8k is absolutely free to use. You can download Instagram thread videos without any cost or subscription. Enjoy the convenience of effortlessly downloading multiple videos from threads without any financial burden.
          </p>
        </details>

        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">Do you need any account for it?</summary>
          <p className="section-description mt-2 px-4 py-2">
            No, you do not need to create an account to use Downloader8k. It is a hassle-free web app that allows you to download Instagram thread videos without any login or registration requirements. Simply paste the link, click the Download button, and start downloading your favorite videos.
          </p>
        </details>

        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">Do I have to pay for it?</summary>
          <p className="section-description mt-2 px-4 py-2">
            No, Downloader8k is completely free to use. There are no hidden charges or fees involved. You can enjoy the full functionality of the web app without any payment obligations. Download as many Instagram thread videos as you like without spending a dime.
          </p>
        </details>

        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">Does it work on all devices?</summary>
          <p className="section-description mt-2 px-4 py-2">
            Yes, Downloader8k works on all devices. Whether you are using a desktop computer, laptop, smartphone, or tablet, you can access the web app and download Instagram thread videos seamlessly. Enjoy the convenience of downloading videos from threads on any device of your choice.
          </p>
        </details>

        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">Can I play the video?</summary>
          <p className="section-description mt-2 px-4 py-2">
            Yes, you can play the videos downloaded using Downloader8k. Once you download the videos, you can open them using any media player that supports the video format. Enjoy watching your favorite Instagram thread videos offline at your convenience.
          </p>
        </details>

        <details className="mb-4 select-none">
          <summary className="section-title font-bold rounded-lg cursor-pointer bg-gray-100 px-4 py-4 border-t border-b border-gray-100">Where are my videos saved?</summary>
          <p className="section-description mt-2 px-4 py-2">
            When you download videos using Downloader8k, they are typically saved in the default download location specified by your browser settings. You can usually find the downloaded videos in your computer Downloads folder or in the designated location set by your browser. Check your browser settings or your operating system

       file manager to locate the downloaded videos.
          </p>
        </details>
      </div>
      <footer>
      <div className="w-full bg-gray-100">
        <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Downloader8ks —
            <Link
              href="/"
              rel="noopener noreferrer"
              className="text-black font-bold ml-1"
              target="_blank"
            >
              @Downloader8ks
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="/" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.3rem"
                    width="1.3rem"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
                  </svg>
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
              </svg>
            </Link>
          </span>
        </div>
      </div>
      </footer>
      </>
  );
};

export default Home;
