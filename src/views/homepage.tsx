import * as React from 'react';
import Tab from '../components/tab';
import { Variants, motion } from 'framer-motion';
import { Homepage } from '../helpers/data/homepage.ui';
import { Section } from '../helpers/interfaces/homepage';

function Content({ header, subheader, content, buttonText }: Pick<Section, 'header' | 'subheader' | 'content' | 'buttonText'>): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='text-center md:text-right w-full md:w-2/5'>
      <h1 className='text-lg font-extrabold text-blue uppercase mb-4'>{header}</h1>
      <p className='text-3xl font-bold mb-3 lg:mb-5'>{subheader}</p>
      <p className='text-lg leading-8 font-normal pb-12'>{content}</p>
      <button className='px-5 py-2 border-[0.4px] border-solid border-gray mb-7'>{buttonText}</button>
    </motion.div>
  );
}

function DocumentScannerSection({ buttonText, header, images, subheader, content }: Section): React.ReactNode {
  return (
    <div className='flex items-center z-30 justify-between flex-col-reverse md:flex-row'>
      <motion.img
        {...images[0].animation}
        src={images[0].imgSrc}
        alt=""
        className='max-w-fit sm:w-[230px] md:w-[300px] lg:w-auto'
      />
      <Content header={header} subheader={subheader} content={content} buttonText={buttonText} />
    </div>
  );
}

function SignAndStampSection({ buttonText, header, images, subheader, content }: Section): React.ReactNode {
  return (
    <div className='flex items-center z-30 md:ml-[-100px] justify-between flex-col-reverse md:flex-row'>
      <div className='flex items-center'>
        {images.map((image) => {
          return (
            <motion.img
              key={image.imgSrc}
              {...image.animation}
              src={image.imgSrc}
              alt=""
              className={image.className}
            />
          );
        })}
      </div>
      <Content header={header} subheader={subheader} content={content} buttonText={buttonText} />
    </div>
  );
}

function BatchScanning({ buttonText, header, images, subheader, content }: Section): React.ReactNode {
  return (
    <div className='flex items-center z-30 justify-between flex-col-reverse md:flex-row'>
      <div className='flex flex-col items-center bottom-0 left-0 relative w-[245px] md:w-full h-[300px] lg:h-[482px]'>
        {images.map((image) => {
          return (
            <motion.img
              key={image.imgSrc}
              {...image.animation}
              src={image.imgSrc}
              alt=""
              className={image.className}
            />
          );
        })}
      </div>
      <Content header={header} subheader={subheader} content={content} buttonText={buttonText} />
    </div>
  );
}

function AdvancedFilters({ buttonText, header, images, subheader, content }: Section): React.ReactNode {
  return (
    <div className='flex items-center z-30 justify-between flex-col-reverse md:flex-row'>
      <div className='flex items-center'>
        {images.map((image) => {
          return (
            <motion.img
              key={image.imgSrc}
              {...image.animation}
              src={image.imgSrc}
              alt=""
              className={image.className}
            />
          );
        })}
      </div>
      <Content header={header} subheader={subheader} content={content} buttonText={buttonText} />
    </div>
  );
}

function ExportAndShare({ buttonText, header, images, subheader, content }: Section): React.ReactNode {
  return (
    <div className='flex items-center z-30 justify-between flex-col-reverse md:flex-row'>
      <div className='flex items-center bottom-0 left-0 relative w-[245px] md:w-full h-[300px] lg:h-[482px]'>
        {images.map((image) => {
          return (
            <motion.img
              key={image.imgSrc}
              {...image.animation}
              src={image.imgSrc}
              alt=""
              className={image.className}
              variants={(image.animation.variants as (Variants | undefined) as Variants)}
            />
          );
        })}
      </div>
      <Content header={header} subheader={subheader} content={content} buttonText={buttonText} />
    </div>
  );
}

export default function HomepageView() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <div className='mt-14 lg:mt-32 '>
      <div className='container mx-auto'>
        {
          Homepage.sections.map((section) => {
            if (section.id === 'document-scanner' && selectedTab === 0) {
              return <DocumentScannerSection key={section.id} {...section} />;
            } else if (section.id === 'sign-and-stamp' && selectedTab === 1) {
              return <SignAndStampSection key={section.id} {...section} />;
            } else if (section.id === 'batch-scanning' && selectedTab === 2) {
              return <BatchScanning key={section.id} {...section} />;
            } else if (section.id === 'advanced-filters' && selectedTab === 3) {
              return <AdvancedFilters key={section.id} {...section} />;
            } else if (section.id === 'export-and-share' && selectedTab === 4) {
              return <ExportAndShare key={section.id} {...section} />;
            }
            return null;
          })
        }
      </div>
      <div className='flex items-center overflow-auto w-full z-50 scroll-area'>
        {
          Homepage.tabs.map((tab) => {
            return (
              <Tab
                key={tab.id}
                icon={<img src={tab.iconSrc} />}
                selected={selectedTab === tab.id}
                onClick={() => setSelectedTab(tab.id)}
                text={tab.text}
              />
            );
          })
        }
      </div>
      <div className='w-full h-[500px] flex items-center  z-50 relative bg-white'>
      </div>
    </div>
  );
}

