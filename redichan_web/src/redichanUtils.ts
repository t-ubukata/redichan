const APIOrigin = (() => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    return 'http://localhost:4000';
  }
  if (process.env.NODE_ENV === 'production') {
    // TODO: Decide production API origin.
    return '';
  }
  throw Error('Unknown NODE_ENV value');
})();

const boardName2langName = (boardName: string): string =>
  boardName.substring(0, 2);

const boardName2shortBoardName = (boardName: string): string =>
  boardName.substring(2).toLowerCase();

const concatLangNameAndShortBoadName = (
  langName: string,
  shortBoardName: string
) => {
  const upperCamelShortBoardName = `${shortBoardName
    .substring(0, 1)
    .toUpperCase()}${shortBoardName.substring(1)}`;
  return `${langName}${upperCamelShortBoardName}`;
};

const getVideoThumbnail = (path: string): Promise<string> =>
  new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const video = document.createElement('video');

    video.autoplay = true;
    video.muted = true;
    video.src = path;

    video.onloadeddata = () => {
      const ctx = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      video.pause();
      return resolve(canvas.toDataURL('image/png'));
    };
  });

export {
  APIOrigin,
  boardName2langName,
  boardName2shortBoardName,
  concatLangNameAndShortBoadName,
  getVideoThumbnail,
};
