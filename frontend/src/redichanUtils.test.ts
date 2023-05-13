import {
  boardName2langName,
  boardName2shortBoardName,
  concatLangNameAndShortBoadName,
} from 'redichanUtils';

test('boardName2langName receives boardName and returns langName', () => {
  expect(boardName2langName('enNews')).toBe('en');
});

test('boardName2shortBoardName receives boardName and returns shortBoardName', () => {
  expect(boardName2shortBoardName('enNews')).toBe('news');
});

test('concatLangNameAndShortBoadName receives langName and shortBoardName then returns boardName', () => {
  expect(concatLangNameAndShortBoadName('en', 'news')).toBe('enNews');
});
