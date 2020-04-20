Сервер для проекта "Место"
=============================
Цель данного проекта - создание сервера с API и аутентификацией для проекта МЕСТО. Научиться работать с базами данных, разобраться в безопасности и тестировании, научиться разворачивать бекенд на удаленной машине.

## Технологический стек
- JS
- Фреймворк express
- а так же использовался editorconfig и eslint для форматирования кода.

## версия 1.0.0
- по локальному адресу localhost:3000 загружает фронтенд проекта Mesto
- при запросе GET localhost:3000/users сервер вернёт JSON-объект из файла users.json;
- при запросе GET localhost:3000/cards сервер вернёт JSON-объект из файла cards.json;
- при запросе GET localhost:3000/users/8340d0ec33270a25f2413b69  сервер вернет JSON-объект пользователя с переданным идентификатором, если такого пользователя нет, то вернет сообщение «Нет пользователя с таким id»
- при запросе на несуществующий адрес API вернет «Запрашиваемый ресурс не найден»

## версия 1.1.0 Создание REST API
- Подключена база данных Mongo, созданы схемы и модели для карточек и пользователей;
- Переписала сервер следуя принципам REST API, сервер больше не хранит информацию о состоянии пользователя;
- Создала контроллеры и роутеры для пользователей и карточек;
- Реализовала временное решение авторизации. (В следующей версии будет лучше);
- Добавила запросы обновления профиля, аватара, поставка и снятие лайка с карточки.

## версия 1.2.0 
- Создала аутентификацию и авторизацию пользователей 
- Обезопасила сервер

## версия 1.3.0 
- Научилась обрабатывать ошибки централизованно, изучила логирование запросов и ошибок;
- Создала удаленный сервер на Яндекс.Облако;
- Сделала доменное имя;

### Сервер располагается по адресу
- https://api.mestodiana.gq/
- http://api.mestodiana.ga/
- 84.201.130.178


## Инструкция как развернуть проект
- Клонируйте или скачайте репозиторий: https://github.com/DianaIvanovna/server-for-Mesto
- Предварительно установите node.js
- Установите необходимые пакеты командой: npm i
- Запустите сервер командой: npm run dev
