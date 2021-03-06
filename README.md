# Техническое задание

## 1. Введение
### 1.1. Наименование приложения

Наименование приложения: «Quest Kingdom»

### 1.2. Термины и определения

*Квест* – набор заданий, каждое из которых построено на основе шаблона.

### 1.3. Назначение и область применения

Приложение предназначено для предоставления пользователям возможности создавать собственные квесты и проходить квесты, созданные другими пользователями.

## 2. Требования к приложению
### 2.1. Требования к функциональным характеристикам

Приложение должно обеспечивать выполнение перечисленных ниже функций:  
1. Разделение пользователей на группы:  
  1.1. авторизованные;  
  1.2. неавторизованные;  
  1.3. администраторы.  
2. Авторизация пользователей.  
3. Для авторизованных пользователей:  
  3.1. Просмотр и редактирование личных данных.  
  3.2. Создание квестов на основе доступных шаблонов.  
  3.3. Возможность прохождения квестов, созданных другими пользователями.  
  3.4. Просмотр и фильтрация списка квестов, доступных для прохождения.  
  3.5. Оценка квестов, созданных другими пользователями.  
4. Для администраторов:  
  4.1. Просмотр квестов, созданных пользователями.  
  4.2. Просмотр списка квестов, доступных для прохождения.  
  4.3. Удаление квестов, содержание которых нарушает правила пользования сайтом.  
  4.4. Удаление учетных записей пользователей, неоднократно нарушивших правила пользования сайтом.  

### 2.2. Требования к надежности 

Приложение должен предусматривать базовую защиту от основных видов атак: XSS, SQL-инъекций, CSRF-уязвимостей.  
Устойчивое функционирование приложения должно быть обеспечено организацией бесперебойного питания технических средств и регулярным выполнением рекомендаций Министерства труда и социального развития РФ, изложенных в Постановлении от 23 июля 1998 г. «Об утверждении межотраслевых типовых норм времени на работы по сервисному обслуживанию ПЭВМ и оргтехники и сопровождению программных средств».  
Время восстановления после отказа, вызванного сбоем электропитания технических средств или иными внешними факторами, не фатальным сбоем операционной системы, не должно превышать 30-ти минут при условии соблюдения условий эксплуатации технических и программных средств.  
Время восстановления после отказа, вызванного неисправностью технических средств, фатальным сбоем операционной системы, не должно превышать времени, требуемого на устранение неисправностей технических средств и переустановки программных средств.  
Отказы приложения вследствие некорректных действий пользователей недопустимы.

## 3. Условия эксплуатации
### 3.1. Климатические условия эксплуатации

Климатические условия эксплуатации, при которых должны обеспечиваться заданные характеристики, должны удовлетворять требованиям, предъявляемым к техническим средствам в части условий их эксплуатации.

### 3.2. Требования к персоналу

Контроль функционирования системы выполняет системный администратор, в перечень задач, которого входит:
1. поддержание работоспособности аппаратного обеспечения;
2. установка и поддержание работоспособности системного программного обеспечения – операционной системы;
3. установка и поддержание работоспособности серверного программного обеспечения;
4. создание учетных записей администраторов сайта;
5. создание резервных копий базы данных.

Администрирование учетных записей пользователей и контроль информационного наполнения сайта осуществляется лицом, определяемым заказчиком.

### 3.3. Требования к составу и параметрам технических средств

Минимальные требования к серверному аппаратному и программному обеспечению отражены в таблице.

Процессор: Intel Core i5-7400 3,00 ГГц  
Оперативная память: DDR4 8 Гб  
Постоянная память: 500 Гб  
Операционная система: Windows 7 (x64) / Ubuntu 16.04  
Серверное ПО: Node.js 9.2.0, MongoDB 3.6

## 4. Порядок контроля и приемки

Сайт должен корректно отображаться и функционировать в следующих браузерах:
1. Google Chrome
2. Mozilla Firefox
3. Opera

Приемка программы осуществляется после периода опытной эксплуатации программы. Если сайт работает корректно и устойчиво в течение 7-и календарных дней, период опытной эксплуатации считается завершенным. Исполнитель обязуется сопровождать программный продукт в течение 1-го месяца с начала периода эксплуатации, устранять все недоработки и несоответствия техническому заданию (без изменения состава функций программы).



