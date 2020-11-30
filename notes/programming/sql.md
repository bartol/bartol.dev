# SQL

all snippets work in PostgreSQL

<!-- 
commnents
default column value
select
select all
select all from table alias
column match regex
insert
update
delete 
create table
foreign key
current date and time
current date
current time
decimal column
table alias
column alias
count rows
ON DELETE CASCADE
ON UPDATE CASCADE
-->

## Table joins

### Shorter syntax if join columns have same name

    SELECT *
    FROM <table-name>
    <JOIN-TYPE> JOIN <foreign-table-name> USING (<column-name>);

### Join one to many

each resource can have one category, multiple resources can have save category

    SELECT * 
    FROM <table-name> AS <table-alias>
    INNER JOIN <foreign-table-name> AS <foreign-table-alias>
    ON <table-alias>.<column-name> = <foreign-table-alias>.<foreign-column-name>;

## Column types

### Integer

    <column-name> INTEGER

### Auto-incrementing integer

    <column-name> SERIAL

### Text

    <column-name> TEXT

### Money

    <column-name> MONEY

possible value: `8.99`

### Date

    <column-name> DATE

possible value: `2020-11-30`

### Time

    <column-name> TIME

possible value: `11:24:02`

### Date and time

    <column-name> TIMESTAMP

possible value: `2020-11-30 11:24:02`

### Boolean

    <column-name> BOOLEAN

possible values: `'t'`, `'n'`

## Column constraints

### Primary key

    <table-name>_id SERIAL PRIMARY KEY

### Not null

    <column-name> <COLUMN-TYPE> NOT NULL

### Foreign key

    <column-name> INTEGER,
    FOREIGN KEY (<column-name>) REFERENCES <foreign-table-name>(<foreign-column-name>)

## Table relationships

### Many to many

intersection table is needed

for example each account can have multiple products and each product can have multiple owners

    CREATE TABLE accounts_products (
        account_id INTEGER,
        product_id INTEGER,
        FOREIGN KEY (account_id) REFERENCES accounts(account_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id)
    );

### Enum column (emulated)

for example resource status

    CREATE TABLE <table-name>_status (
        status TEXT PRIMARY KEY
    );

    CREATE TABLE <table-name> (
        -- ...
        status TEXT,
        FOREIGN KEY (status) REFERENCES <table-name>_status(status)
    );

## Note sources

- <https://pragprog.com/titles/bksqla/sql-antipatterns/>