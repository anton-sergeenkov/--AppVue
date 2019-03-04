<template>
    <div class="wrapper">
        <h1>Контакты</h1>
        <div class="map">
            <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac766565955f19a747ee763de762c49111d1e7c93fb2df639384542d89e7afaed&amp;source=constructor" 
                width="100%" height="100%" frameborder="0">
            </iframe>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
}
.map {
    width: 100%;
    height: 400px;
    margin-top: 20px;
    overflow: hidden;
    border-radius: .25rem;
	box-shadow:
		0 16px 24px 2px rgba(33,37,41,.02), 
		0 6px 30px 5px rgba(33,37,41,.04), 
		0 8px 10px -5px rgba(33,37,41,.1);
}
</style>