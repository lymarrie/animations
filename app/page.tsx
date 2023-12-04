import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './components/AnimateOnScroll'; // Adjust the path based on your actual project structure

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col centered-container">
      <section className="mt-20 items-center" style={{minHeight: "70vh"}}>
        <AnimateOnScroll>
          <div className="items-center flex flex-col space-y-12 text-center md:flex-row md:space-y-0 md:space-x-20">
            <h1 className="whitespace-nowrap">Luc Marrie</h1>
            <Image
              src="/luc-space-pic.JPG"
              className="rounded-full image-shadow w-3/4"
              width={300}
              height={300}
              alt="Luc's Profile Pic"
            />
          </div>
        </AnimateOnScroll>
      </section>
      <section className="" style={{minHeight: "70vh"}}>
        <AnimateOnScroll hiddenClass="space-y-12 fadeFromLeft-hidden" showClass="fadeFromLeft-show">
          <h2>Digital Artist 🎨</h2>
          <div className="space-y-8 text-left">
            <p className="paragraph">Luc thinks that, because he learned some basic CSS animations, he can call himself a <em>digital artist</em>.</p>
            <p className="paragraph">Just kidding... these aren&apos;t basic CSS animations; this is some <em>hardcore</em> stuff.</p>
            <p className="paragraph">Creating these effects requires PHD-level mathematics and physics.</p>
          </div>
        </AnimateOnScroll>
      </section>
      <section className="" style={{minHeight: "70vh"}}>
        <AnimateOnScroll hiddenClass="fadeFromLeft-hidden" showClass="fadeFromLeft-show">
          <div className="space-y-8">
            <h2>How is this possible? 🤔</h2>
            <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-10">
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
                  target="_blank"
                  className='transition duration-200 ease-out space-y-6 border-2 rounded-lg p-8 bg-gray-900 hover:bg-cyan-800 hover:ease-in'
                >
                  <div className="space-y-6">
                    <div className="font-bold text-2xl">Intersection Observer API</div>
                    <p className="text-lg">The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document&apos;s viewport.</p>
                    <img
                      src="https://www.mozilla.org/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg"
                      className="flex mx-auto py-4 w-1/2 md:w-2/3"
                    />
                  </div>
                </a>
                <a 
                  href="https://www.npmjs.com/package/react-intersection-observer"
                  target="_blank"
                >
                  <div className="transition duration-200 ease-out space-y-6 border-2 rounded-lg p-8 bg-gray-900 hover:bg-cyan-800 hover:ease-in">
                      <div className="space-y-6">
                        <div className="font-bold text-2xl">React Intersection Observer</div>
                        <p className="text-lg">A React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport. Contains both a Hooks, render props and plain children implementation.</p>
                        <img
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                         className="flex mx-auto py-4 w-1/2 md:w-2/3"
                        />
                      </div>
                  </div>
                </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
