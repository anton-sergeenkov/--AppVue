# AppVue

## NPM
```
npm install   # install dependencies
npm run serve # compiles and hot-reloads for development
npm run build # compiles and minifies for production
``` 

## Описание проекта

### Компонент кастомизации SVG-иконок
- Компонент components/svg/icon/icon-name.vue содержит подготовленный код SVG-иконки с указанным viewBox
- Компонент components/svg/IconBase.vue позволяет загрузить икноку из каталога components/svg/icon/ и кастомизировать ее (цвет, ширина, высота)

### Корзина товаров
- Добавление товара в корзину со страницы "Каталог товаров" (кнопка "Добавить в корзину"). У кнопки "Добавить в корзину" добавляется класс "active" и текст кнопки меняется на "Удалить из корзины"  
- Удаление товара из корзины со страницы "Каталог товаров" (кнопка "Удалить из корзины"). У кнопки "Удалить из корзины" удаляется класс "active" и текст кнопки меняется на "Добавить в корзину"  
- Просмотр и удаление выбранных продуктов на странице "Корзины покупок"  

### Плагины
- FontAwesome
- Vuetify

## Технологии
- Vue.js, Vuex, Vue Router, Vue CLI 3  
- HTML5, CSS3, JavaScript  

[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
