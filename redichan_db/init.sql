-- Creates database.
CREATE DATABASE redichan;

-- Creates tables.
CREATE TABLE redichan.boards (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  language VARCHAR(2) NOT NULL,
  name VARCHAR(32) NOT NULL UNIQUE,
  path VARCHAR(64) NOT NULL UNIQUE,
  minutes_to_live INTEGER NOT NULL,
  order_in_lang INTEGER NOT NULL
);

CREATE TABLE redichan.user_role_types (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  type VARCHAR(16) NOT NULL UNIQUE
);

CREATE TABLE redichan.user_status_types (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  status VARCHAR(16) NOT NULL UNIQUE
);

CREATE TABLE redichan.thread_status_types (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  status VARCHAR(16) NOT NULL UNIQUE
);

CREATE TABLE redichan.post_status_types (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  status VARCHAR(16) NOT NULL UNIQUE
);

CREATE TABLE redichan.users (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(16) NOT NULL UNIQUE,
  role_id INTEGER NOT NULL UNIQUE,
  password_hash VARCHAR(32) NOT NULL,
  FOREIGN KEY (role_id) REFERENCES user_role_types(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE redichan.threads (
  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  board_id INTEGER NOT NULL UNIQUE,
  status_id INTEGER NOT NULL UNIQUE,
  FOREIGN KEY (board_id) REFERENCES boards(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (status_id) REFERENCES thread_status_types(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE redichan.posts (
  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  number INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
  thread_id INTEGER NOT NULL UNIQUE,
  poster_id INTEGER NOT NULL UNIQUE,
  comment VARCHAR(2000) NOT NULL,
  attachment_path VARCHAR(64) NOT NULL,
  status_id INTEGER NOT NULL UNIQUE,
  utc_timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (thread_id) REFERENCES threads(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (poster_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (status_id) REFERENCES post_status_types(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Creates and grants users.
CREATE USER `admin`@`localhost` IDENTIFIED BY 'admin';
GRANT ALL on redichan.* TO admin@localhost IDENTIFIED BY 'admin';

CREATE USER `app`@`localhost` IDENTIFIED BY 'app';
GRANT SELECT, INSERT, UPDATE, DELETE on redichan.* TO app@localhost IDENTIFIED BY 'app';

-- Inserts user tole types.
INSERT INTO redichan.user_role_types (type) VALUES
  (0, 'ordinary'),
  (1, 'admin');

-- Inserts user status types.
INSERT INTO redichan.user_status_types (status) VALUES
  (0, 'available'),
  (1, 'suspended');

-- Inserts thread status types.
INSERT INTO redichan.thread_status_types (status) VALUES
  (0, 'available'),
  (1, 'deleted');

-- Inserts post status types.
INSERT INTO redichan.post_status_types (status) VALUES
  (0, 'available'),
  (1, 'deleted');

-- Inserts initial data.
INSERT INTO redichan.boards (lang, name, path, minutes_to_live, order_in_lang) VALUES
  -- English Boards
  ('en', 'News', '/boards/en/news', 1440, 1),
  ('en', 'Politics', '/boards/en/politics', 1440, 2),
  ('en', 'Economy', '/boards/en/economy', 1440, 3),
  ('en', 'Law', '/boards/en/law', 1440, 4),
  ('en', 'Baseball', '/boards/en/baseball', 1440, 5),
  ('en', 'Soccer', '/boards/en/soccer', 1440, 6),
  ('en', 'Sports', '/boards/en/sports', 1440, 7),
  ('en', 'Food', '/boards/en/food', 1440, 8),
  ('en', 'Animal', '/boards/en/animal', 1440, 9),
  ('en', 'Vehicle', '/boards/en/vehicle', 1440, 10),
  ('en', 'Book', '/boards/en/book', 1440, 11),
  ('en', 'Music', '/boards/en/music', 1440, 12),
  ('en', 'Military', '/boards/en/military', 1440, 13),
  ('en', 'Gaming', '/boards/en/gaming', 1440, 14),
  ('en', 'Video', '/boards/en/video', 1440, 15),
  ('en', 'Anime', '/boards/en/anime', 1440, 16),
  ('en', 'Comic', '/boards/en/comic', 1440, 17),
  ('en', 'Fashion', '/boards/en/fashion', 1440, 18),
  ('en', 'Beauty', '/boards/en/beauty', 1440, 19),
  ('en', 'Science', '/boards/en/science', 1440, 20),
  ('en', 'Humanities', '/boards/en/humanities', 1440, 21),
  ('en', 'Computer', '/boards/en/computer', 1440, 22),
  ('en', 'Software Development' '/boards/en/software-development', 1440, 23),
  ('en', 'About redichan', '/boards/en/about-redichan', 1440, 24),
  ('en', 'Misc', '/boards/en/misc', 1440, 25),
  ('en', 'Random', '/boards/en/random', 60, 26),
  ('en', 'may', '/boards/en/may', 60, 27),
  ('en', 'img', '/boards/en/img', 60, 28),
  ('en', 'G', '/boards/en/g', 1, 29),
  -- Japanese Boards
  ('ja', 'ニュース', '/boards/ja/news', 1440, 1),
  ('ja', '政治', '/boards/ja/politics', 1440, 2),
  ('ja', '経済', '/boards/ja/economy', 1440, 3),
  ('ja', '法', '/boards/ja/law', 1440, 4),
  ('ja', '野球', '/boards/ja/baseball', 1440, 5),
  ('ja', 'サッカー', '/boards/ja/soccer', 1440, 6),
  ('ja', 'スポーツ', '/boards/ja/sports', 1440, 7),
  ('ja', '食べ物', '/boards/ja/food', 1440, 8),
  ('ja', '動物', '/boards/ja/animal', 1440, 9),
  ('ja', '乗り物', '/boards/ja/vehicle', 1440, 10),
  ('ja', '本', '/boards/ja/book', 1440, 11),
  ('ja', '音楽', '/boards/ja/music', 1440, 12),
  ('ja', '軍事', '/boards/ja/military', 1440, 13),
  ('ja', 'ゲーム', '/boards/ja/gaming', 1440, 14),
  ('ja', '動画', '/boards/ja/video', 1440, 15),
  ('ja', 'アニメ', '/boards/ja/anime', 1440, 16),
  ('ja', '漫画', '/boards/ja/comic', 1440, 17),
  ('ja', 'ファッション', '/boards/ja/fashion', 1440, 18),
  ('ja', '美容', '/boards/ja/beauty', 1440, 19),
  ('ja', '科学', '/boards/ja/science', 1440, 20),
  ('ja', '人文科学', '/boards/ja/humanities', 1440, 21),
  ('ja', 'コンピューター', '/boards/ja/computer', 1440, 22),
  ('ja', 'ソフトウェア開発' '/boards/ja/software-development', 1440, 23),
  ('ja', 'redichanについて', '/boards/ja/about-redichan', 1440, 24),
  ('ja', 'その他', '/boards/ja/misc', 1440, 25),
  ('ja', 'Random', '/boards/ja/random', 60, 26),
  ('ja', 'may', '/boards/ja/may', 60, 27),
  ('ja', 'img', '/boards/ja/img', 60, 28),
  ('ja', 'G', '/boards/ja/g', 1, 29);

-- Inserts initial users.
INSERT INTO redichan.users (name, role_id, password_hash) VALUES
  ('admin01', 1, 'admin01');


