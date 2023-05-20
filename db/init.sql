-- Creates database.
CREATE DATABASE redichan CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_bin;

-- Creates tables.
CREATE TABLE redichan.boards (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  language VARCHAR(2) NOT NULL,
  name VARCHAR(32) NOT NULL UNIQUE,
  show_name VARCHAR(32) NOT NULL UNIQUE,
  minutes_to_live INTEGER
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
-- Creates and grants users.  CREATE USER `admin`@`localhost` IDENTIFIED BY 'admin';
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
INSERT INTO redichan.boards (lang, name, show_name, minutes_to_live) VALUES
  -- English Boards
  ('en', 'enNews', 'News', 1440),
  ('en', 'enPolitics', 'Politics', 1440),
  ('en', 'enEconomy', 'Economy', 1440),
  ('en', 'enLaw', 'Law',1440),
  ('en', 'enBaseball', 'Baseball', 1440),
  ('en', 'enSoccer', 'Soccer', 1440),
  ('en', 'enSports', 'Sports', 1440),
  ('en', 'enFood', 'Food', 1440),
  ('en', 'enAnimal', 'Animal', 1440),
  ('en', 'enAuto', 'Auto', 1440),
  ('en', 'enBook', 'Book', 1440),
  ('en', 'enMusic', 'Music', 1440),
  ('en', 'enMilitary', 'Military', 1440),
  ('en', 'enGaming', 'Gaming', 1440),
  ('en', 'enVideo', 'Video', 1440),
  ('en', 'enAnime', 'Anime', 1440),
  ('en', 'enComic', 'Comic', 1440),
  ('en', 'enFashion', 'Fashion', 1440),
  ('en', 'enBeauty', 'Beauty', 1440),
  ('en', 'enScience', 'Science', 1440),
  ('en', 'enHumanities', 'Humanities', 1440),
  ('en', 'enComputer', 'Computer', 1440),
  ('en', 'enSoftwareDevelopment', 'Software Development' 1440),
  ('en', 'enAboutRedichan', 'About redichan', 1440),
  ('en', 'enMisc', 'Misc', 1440),
  ('en', 'enRandom', 'Random', 60),
  ('en', 'enMay', 'may', 60),
  ('en', 'enImg', 'img', 60),
  ('en', 'enG', 'G', 1),
  -- Japanese Boards
  ('ja', 'jaNews', 'ニュース', 1440),
  ('ja', 'jaPolitics', '政治', 1440),
  ('ja', 'jaEconomy', '経済', 1440),
  ('ja', 'jaLaw', '法',1440),
  ('ja', 'jaBaseball', '野球', 1440),
  ('ja', 'jaSoccer', 'サッカー', 1440),
  ('ja', 'jaSports', 'スポーツ', 1440),
  ('ja', 'jaFood', '食べ物', 1440),
  ('ja', 'jaAnimal', '動物', 1440),
  ('ja', 'jaAuto', '乗り物', 1440),
  ('ja', 'jaBook', '本', 1440),
  ('ja', 'jaMusic', '音楽', 1440),
  ('ja', 'jaMilitary', '軍事', 1440),
  ('ja', 'jaGaming', 'ゲーム', 1440),
  ('ja', 'jaVideo', '動画', 1440),
  ('ja', 'jaAnime', 'アニメ', 1440),
  ('ja', 'jaComic', '漫画', 1440),
  ('ja', 'jaFashion', 'ファッション', 1440),
  ('ja', 'jaBeauty', '美容', 1440),
  ('ja', 'jaScience', '科学', 1440),
  ('ja', 'jaHumanities', '人文科学', 1440),
  ('ja', 'jaComputer', 'コンピューター', 1440),
  ('ja', 'jaSoftwareDevelopment', 'ソフトウェア開発' 1440),
  ('ja', 'jaAboutRedichan', 'redichanについて', 1440),
  ('ja', 'jaMisc', 'その他', 1440),
  ('ja', 'jaRandom', 'Random', 60),
  ('ja', 'jaMay', 'may', 60),
  ('ja', 'jaImg', 'img', 60),
  ('ja', 'jaG', 'G', 1);

-- Inserts initial users.
INSERT INTO redichan.users (name, role_id, password_hash) VALUES
  ('admin01', 1, 'admin01');


