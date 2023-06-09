/* tslint:disable */
/* eslint-disable */
/**
 * API продавца
 * # Общее описание Wildberries API предоставляет продавцам возможность управления магазином и получения оперативной и статистической информации по протоколу HTTP RestAPI. Описание API предоставляется в формате [Swagger](https://swagger.io/) (Open API) и может быть использовано для импорта в другие инструменты (такие как PostMan) или генерации клиентского кода на различных языках программирования с помощью [Swagger CodeGen](https://swagger.io/tools/swagger-codegen/) Описание в оригинальном swagger-формате swagger OpenAPI-файл swagger.yaml Для ручной проверки API вы можете использовать: Под ОС Windows - [PostMan](https://www.postman.com/) Под ОС Linux - [curl](https://curl.se/) ## Поддержка Техническая поддержка осуществляется через диалоги в личном кабинете продавца. При создании нового обращения в техподдержку используйте категорию API. Новости и изменения, касающиеся API, публикуются в [новостной ленте Wildberries](https://seller.wildberries.ru/news). ## Авторизация Авторизация осуществляется по токенам API, которые владелец личного кабинета (главный пользователь) самостоятельно генерирует в разделе [Профиль --> Настройки --> Доступ к API](https://seller.wildberries.ru/supplier-settings/access-to-api). Существует три типа токенов: Стандартный. Используется для работы с методами из разделов: Цены, Промокоды и скидки, Контент, Marketplace, Рекомендации, Отзывы, Вопросы. Статистика. Используется для работы с методами из раздела Статистика. Реклама. Используется для работы с методами из раздела Реклама. Обратите внимание, что токен отображается ТОЛЬКО в момент создания. Его надо сохранить, потому что больше его отобразить будет нельзя. Созданный токен следует добавлять в каждый запрос, прибавляя к запросу заголовок (http-header) формата `Authorization: .........`. ## Форматы ### Дата и время Во всех методах API статистики дата и время передаются в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). В большинстве случаев вы можете передать дату или дату со временем. Если время не указано, оно принимается равным 00:00:00. Время можно указывать с точностью до секунд или миллисекунд. Литера `Z` в конце строки означает часовой пояс UTC. При ее отсутствии время считается в часовом поясе МСК (UTC+3). Примеры: `2019-06-20` `2019-06-20T00:00:00Z` `2019-06-20T23:59:59` `2019-06-20T00:00:00.12345Z` `2019-06-20T00:00:00.12345` `2017-03-25T00:00:00` ## Release Notes Для просмотра обновлений перейдите по ссылке.
 *
 * The version of the OpenAPI document: 2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export * from "./api";
export * from "./configuration";

