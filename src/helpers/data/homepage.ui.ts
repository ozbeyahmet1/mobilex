import { Homepage as HomepageType } from '../interfaces/homepage';

export const Homepage: HomepageType = {
  tabs: [
    {
      id: 0,
      selected: true,
      text: 'Document Scanner',
      iconSrc:
        'https://res.cloudinary.com/droheqpxn/image/upload/v1717295397/hubx/Time_Circle_fuhl6g.svg',
    },
    {
      id: 1,
      selected: false,
      text: 'Sign & Stamp',
      iconSrc:
        'https://res.cloudinary.com/droheqpxn/image/upload/v1717116276/hubx/Time_Circle_sdihqz.svg',
    },
    {
      id: 2,
      selected: false,
      text: 'Batch Scanning',
      iconSrc:
        'https://res.cloudinary.com/droheqpxn/image/upload/v1717295527/hubx/scanner_1_jdhnlc.svg',
    },
    {
      id: 3,
      selected: true,
      text: 'Advanced Filters',
      iconSrc:
        'https://res.cloudinary.com/droheqpxn/image/upload/v1717296312/hubx/Time_Circle_cqooxa.svg',
    },
    {
      id: 4,
      selected: true,
      text: 'Export & Share',
      iconSrc:
        'https://res.cloudinary.com/droheqpxn/image/upload/v1717296406/hubx/Time_Circle_pl4sq5.svg',
    },
  ],
  sections: [
    {
      id: 'document-scanner',
      images: [
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717200187/hubx/telephone_emdwkb.png',
          animation: {
            initial: { y: 600 },
            animate: { y: 0 },
            exit: { opacity: 0 },
            transition: { duration: 1, delay: 0.5 },
          },
        },
      ],
      header: 'Document Scanner',
      subheader: 'Scan with Ease',
      buttonText: 'Learn More',
      content:
        'Scan any document instantly with your mobile device by just a few steps.Save as PDF,JPG,ZIP,TXT and Word format.',
    },
    {
      id: 'sign-and-stamp',
      images: [
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717293938/hubx/group48_d4boxy.png',
          animation: {
            initial: { y: 80, x: 100, opacity: 0, scale: 0, zIndex: 50 },
            animate: { y: 80, x: 100, opacity: 1, scale: 1, zIndex: 50 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.5 },
          },
          className: 'max-w-fit sm:w-[142px] md:w-[168px] lg:w-auto',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717293736/hubx/signstap_pxdgnv.png',
          animation: {
            initial: { y: 600, zIndex: 40 },
            animate: { y: 0, zIndex: 40 },
            exit: { opacity: 0 },
            transition: { duration: 1, delay: 0.5 },
          },
          className: 'max-w-fit sm:w-[230px] md:w-[300px] lg:w-auto',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717293938/hubx/group_55_ypwygl.png',
          animation: {
            initial: { y: 0, x: -100, opacity: 0, scale: 0, zIndex: 50 },
            animate: { y: 0, x: -100, opacity: 1, scale: 1, zIndex: 50 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.8 },
          },
          className: 'max-w-fit sm:w-[142px] md:w-[168px] lg:w-auto',
        },
      ],
      header: 'Sign & Stamp',
      subheader: 'One-Tap Focus',
      buttonText: 'Learn More',
      content:
        'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    },
    {
      id: 'batch-scanning',
      images: [
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717297445/hubx/Frame_jiwhm5.png',
          animation: {
            initial: { position: 'absolute', top: 600, left: 0, zIndex: 2 },
            animate: { position: 'absolute', top: 0, left: 0, zIndex: 2 },
            exit: { opacity: 0 },
            transition: { duration: 0.9, delay: 0.4 },
          },
          className: 'max-w-fit w-[250px] md:w-[300px] lg:w-auto',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717297445/hubx/File_Preview_nfrgnh.png',
          animation: {
            initial: { position: 'absolute', top: 600, zIndex: 4 },
            animate: { position: 'absolute', top: 120, zIndex: 4 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.1 },
          },
          className:
            'max-w-fit w-[165px] md:w-[200px] lg:w-[245px] left-[40px] md:left-[50px] lg:left-[60px]',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717297446/hubx/File_Preview-1_ficpvf.png',
          animation: {
            initial: { position: 'absolute', top: 600, zIndex: 4 },
            animate: { position: 'absolute', top: 130, zIndex: 4 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.5 },
          },
          className:
            'max-w-fit left-[30px] md:left-[36px] lg:left-[45px] w-[188px] md:w-[230px] lg:w-[273px] ',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717297445/hubx/File_Preview-2_uv9snx.png',
          animation: {
            initial: { position: 'absolute', top: 600, zIndex: 4 },
            animate: { position: 'absolute', top: 150, zIndex: 4 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.9 },
          },
          className:
            'max-w-fit left-[25px] md:left-[30px] lg:left-[35px] w-[200px] md:w-[245px] lg:w-[295px]',
        },
      ],
      header: 'Batch Scanning',
      subheader: 'Multiple Page Scan',
      buttonText: 'Learn More',
      content:
        'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    },
    {
      id: 'advanced-filters',
      images: [
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717357129/hubx/Group_41_bknzmv.png',
          animation: {
            initial: {
              opacity: 0,
              scale: 0,
              zIndex: 50,
              transform: 'revert-layer',
            },
            animate: {
              opacity: 1,
              scale: 1,
              zIndex: 50,
              transform: 'revert-layer',
            },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.5 },
          },
          className:
            'max-w-fit w-[28px] h-[240px] lg:w-[42px] lg:h-[360px] lg:w-auto translate-x-[15px] translate-y-[35px]',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717356966/hubx/frames_y4qsbb.png',
          animation: {
            initial: { y: 600, zIndex: 40 },
            animate: { y: 0, zIndex: 40 },
            exit: { opacity: 0 },
            transition: { duration: 1, delay: 0.5 },
          },
          className: 'max-w-fit w-[250px] md:w-[300px] lg:w-auto',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717357128/hubx/Group_s42_z5dbt3.png',
          animation: {
            initial: {
              opacity: 0,
              scale: 0,
              zIndex: 50,
              transform: 'revert-layer',
            },
            animate: {
              opacity: 1,
              scale: 1,
              zIndex: 50,
              transform: 'revert-layer',
            },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.8 },
          },
          className:
            'max-w-fit w-[28px] h-[240px] lg:w-[42px] lg:h-[360px] translate-x-[-15px] translate-y-[35px]',
        },
      ],
      header: 'Advanced fılters',
      subheader: 'Unique Filters',
      buttonText: 'Learn More',
      content:
        'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    },
    {
      id: 'export-and-share',
      images: [
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717357961/hubx/famrez_t5za7x.png',
          animation: {
            initial: { y: 600, zIndex: 40 },
            animate: { y: 0, zIndex: 40 },
            exit: { opacity: 0 },
            transition: { duration: 1, delay: 0.5 },
          },
          className: 'max-w-fit w-[230px] md:w-[300px] lg:w-auto',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717357961/hubx/ss_xatdvp.png',
          animation: {
            initial: {
              bottom: 0,
              position: 'absolute',
              x: 35,
              opacity: 0,
              scale: 0,
              zIndex: 50,
            },
            animate: {
              bottom: 40,
              position: 'absolute',
              x: -35,
              opacity: 1,
              scale: 1,
              zIndex: 50,
            },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.5 },
          },
          className:
            'max-w-fit !bottom-[10px] lg:!bottom-[40px]  w-[20px] lg:w-[40px]',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717357961/hubx/sss_tzaaww.png',
          animation: {
            initial: {
              bottom: -100,
              position: 'absolute',
              x: 45,
              opacity: 0,
              scale: 0,
              transform: 'revert-layer',
            },
            animate: {
              bottom: 25,
              position: 'absolute',
              x: -25,
              opacity: 1,
              scale: 1,
              transform: 'revert-layer',
            },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 1.8 },
          },
          className:
            'max-w-fit w-[100px] z-50 lg:w-auto translate-x-[-15px] !bottom-[0px] lg:!bottom-[25px] lg:translate-x-[-25px]',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717357962/hubx/dsad_wkizcr.png',
          animation: {
            initial: {
              bottom: -100,
              position: 'absolute',
              x: 220,
              opacity: 0,
              scale: 0,
              transform: 'revert-layer',
            },
            animate: {
              bottom: 60,
              position: 'absolute',
              opacity: 1,
              scale: 1,
              transform: 'revert-layer',
            },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 2.1 },
          },
          className:
            'max-w-fit w-[80px] z-50 lg:w-auto !translate-x-[75px] !bottom-[25px] lg:!bottom-[60px] lg:!translate-x-[110px]',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/droheqpxn/image/upload/v1717357964/hubx/ddsds_cniqqk.png',
          animation: {
            initial: {
              bottom: -100,
              position: 'absolute',
              x: 200,
              opacity: 0,
              scale: 0,
              zIndex: 50,
            },
            animate: {
              bottom: 25,
              position: 'absolute',
              opacity: 1,
              scale: 1,
              zIndex: 50,
            },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 2.4 },
          },
          className:
            'max-w-fit w-[100px] z-50 lg:w-auto !translate-x-[155px] !bottom-[0px] lg:!bottom-[25px] lg:!translate-x-[235px]',
        },
      ],
      header: 'Export & Share',
      subheader: 'All-Round Conversion',
      buttonText: 'Learn More',
      content: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    },
  ],
};
