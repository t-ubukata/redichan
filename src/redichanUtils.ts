const origin = location.host;

const boardName2langName = (boardName: string): string =>
  boardName.substr(0, 2);

const boardName2shortBoardName = (boardName: string): string =>
  boardName.substr(2).toLowerCase();

const concatLangNameAndShortBoadName = (
  langName: string,
  shortBoardName: string
) => {
  const upperCamelShortBoardName = `${shortBoardName
    .substr(0, 1)
    .toUpperCase()}${shortBoardName.substr(1)}`;
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
  origin,
  boardName2langName,
  boardName2shortBoardName,
  concatLangNameAndShortBoadName,
  getVideoThumbnail,
};
