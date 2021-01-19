# PostgreSQL

## Statements

### Select column from all rows

    SELECT <column-name> FROM <table-name>;

### Select all columns from all rows

    SELECT * FROM <table-name>;

### Select rows conditionaly

    SELECT * FROM <table-name>
    WHERE <condition>;

### Select all columns from table alias

    SELECT <table-alias>.*
    FROM <table-name> AS <table-alias>;

### Concatenate multiple queries

    (SELECT * FROM <table-name>)
    UNION ALL
    (SELECT * FROM <table-name>)

### Concatenate multiple queries and return only distinct rows

    (SELECT * FROM <table-name>)
    UNION
    (SELECT * FROM <table-name>)

### Insert row

    INSERT INTO <table-name> (<column-name>, <column-name>, <column-name>)
    VALUES (<column-value>, <column-value>, <column-value>);

### Insert multiple rows

    INSERT INTO <table-name> (<column-name>, <column-name>, <column-name>)
    VALUES (<column-value>, <column-value>, <column-value>),
           (<column-value>, <column-value>, <column-value>),
           (<column-value>, <column-value>, <column-value>);

### Update rows

    UPDATE <table-name>
    SET <column-name> = <column-value>,
        <column-name> = <column-value>
    WHERE <condition>;

### Update all rows

    UPDATE <table-name>
    SET <column-name> = <column-value>,
        <column-name> = <column-value>;

### Delete rows

    DELETE FROM <table-name> WHERE <condition>;

### Delete all rows

    DELETE FROM <table-name>;

### Sort in ascending order

    SELECT * FROM <table-name> ORDER BY <column-name> ASC;

### Sort in descending order

    SELECT * FROM <table-name> ORDER BY <column-name> DESC;

### Return only distinct rows

    SELECT DISTINCT ON (<distinct-column-name>) * FROM <table-name>;

### Limit returned rows

    SELECT * FROM <table-name> LIMIT <limit>;

### Offset returned rows

    SELECT * FROM <table-name> OFFSET <offset>;

### View query performance

    EXPLAIN ANALYZE <query>;

### Return all columns as comma separated list

    SELECT STRING_AGG(column_name, ',') AS columns
    FROM information_schema.columns
    WHERE table_name = <table-name>

## Aliases

### Table alias

    SELECT <column-name> FROM <table-name> AS <table-alias>;

table alias can be now be used for joins, ...

### Column alias

    SELECT <column-name> AS <column-alias> FROM <table-name>;

output will now show column alias instead of column name

## Conditions

### Equal

    <column-name> = <column-value>

### Not equal

    <column-name> <> <column-value>

### Greater than

    <column-name> > <column-value>

### Less than

    <column-name> < <column-value>

### Greater than or equal

    <column-name> >= <column-value>

### Less than or equal

    <column-name> <= <column-value>

### Between range

    <column-name> BETWEEN <low> AND <high>

### Not between range

    <column-name> NOT BETWEEN <low> AND <high>

### Multiple possible values

    <column-name> IN (<column-value>, <column-value>)

### Multiple excluded values

    <column-name> NOT IN (<column-value>, <column-value>)

### Null

    <column-name> IS NULL

### Not null

    <column-name> IS NOT NULL

### Contains

    <column-name> LIKE '%<contains>%'

### Case-insensitive contains

    <column-name> ILIKE '%<contains>%'

### Starts with

    <column-name> LIKE '<starts-with>%'

### Ends with

    <column-name> LIKE '%<ends-with>'

### Starts and ends with

    <column-name> LIKE '<starts-with>%<ends-with>'

### Chain multiple conditions

true if all are true:

    <condition> AND <condition>

true if atleast one is true:

    <condition> OR <condition>

### Negate condition

    NOT <condition>

## Functions

### Test function without query

    SELECT <function>;

### Get current date

    NOW()::DATE

### Get current time

    NOW()::TIME

### Get current date and time

    NOW()::TIMESTAMP

### Get date and time 1 hour from now

    NOW()::TIMESTAMP + INTERVAL '1 hour'

### Get date and time 1 day from now

    NOW()::TIMESTAMP + INTERVAL '1 day'

### Get date and time 1 minute from now

    NOW()::TIMESTAMP + INTERVAL '1 minute'

### Get date and time 1 hour ago

    NOW()::TIMESTAMP - INTERVAL '1 hour'

### Get date and time 1 day ago

    NOW()::TIMESTAMP - INTERVAL '1 day'

### Get date and time 1 minute ago

    NOW()::TIMESTAMP - INTERVAL '1 minute'

### Chain intervals

    NOW()::TIMESTAMP + INTERVAL '1 day' - INTERVAL '1 hour' + INTERVAL '1 minute'

### Extract year from date column

    EXTRACT(YEAR FROM <date-column-name>)

### Extract month from date column

    EXTRACT(MONTH FROM <date-column-name>)

### Extract day from date column

    EXTRACT(DAY FROM <date-column-name>)

### Extract century from date column

    EXTRACT(CENTURY FROM <date-column-name>)

### Extract decade from date column

    EXTRACT(DECADE FROM <date-column-name>)

### Return first non-null value

    COALESE(<column-name>, <column-name>, <column-name>)

### Convert column to upper case

    UPPER(<column-name>)

### Convert column to lower case

    LOWER(<column-name>)

### Cast column value to text

    <column-name>::TEXT

## Aggregate functions

### Count rows

    COUNT(*)

### Return largest column value

    MAX(<column-name>)

### Return smallest column value

    MIN(<column-name>)

### Return average of column values

    AVG(<column-name>)

### Return sum of column values

    SUM(<column-name>)

### Return column values as joined string

    STRING_AGG(<column-name>, <separator>)

## Tables

### Create table

    CREATE TABLE <table-name> (
        <column-name> <COLUMN-TYPE>,
        <column-name> <COLUMN-TYPE>
    );

### Create table if it doesn't exist

    CREATE TABLE IF NOT EXISTS <table-name> (
        <column-name> <COLUMN-TYPE>,
        <column-name> <COLUMN-TYPE>
    );

### Delete table

    DROP TABLE <table-name>;

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

### Decimal number

    <column-name> NUMERIC(<precision>, <scale>)

example parameters:

- `<precision>` = `9`
- `<scale>` = `2`

these can store decimal up to 9999999.99

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

### Composite primary keys

    <column-name> <COLUMN-TYPE>,
    <column-name> <COLUMN-TYPE>,
    PRIMARY KEY (<column-name>, <column-name>)

now columns must be unique pair

### Not null

    <column-name> <COLUMN-TYPE> NOT NULL

### Foreign key

    <column-name> INTEGER,
    FOREIGN KEY (<column-name>) REFERENCES <foreign-table-name>(<foreign-column-name>)

### Foreign key shorter syntax if columns have same name

    <column-name> INTEGER,
    FOREIGN KEY (<column-name>) REFERENCES <foreign-table-name>

### Delete row if foreign row is deleted

    <column-name> INTEGER,
    FOREIGN KEY (<column-name>) REFERENCES <foreign-table-name> ON DELETE CASCADE

### Update row if foreign row id is updated

    <column-name> INTEGER,
    FOREIGN KEY (<column-name>) REFERENCES <foreign-table-name> ON UPDATE CASCADE

### Default value

    <column-name> <COLUMN-TYPE> DEFAULT <column-value>

### Unique

    <column-name> <COLUMN-TYPE> UNIQUE

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

## Alter table

### Add column

    ALTER TABLE <table-name>
    ADD COLUMN <column-name> <COLUMN-TYPE>;

### Change column type

    ALTER TABLE <table-name>
    ALTER COLUMN <column-name> TYPE <COLUMN-TYPE>;

if automatic type casting isn't possible, you'll have to define it manually, for example:

    ALTER TABLE <table-name>
    ALTER COLUMN <column-name> TYPE INTEGER
    USING <column-name>::INTEGER;

## Full text search

create table with text search vector column:

    CREATE TABLE products (
        product_id SERIAL PRIMARY KEY,
        name TEXT,
        description TEXT,
        tsv TSVECTOR
    );

add trigger to update text search vector on every update:

    CREATE EXTENSION unaccent;

    CREATE FUNCTION products_trigger() RETURNS trigger AS $$
    begin
    new.tsv :=
        setweight(to_tsvector(unaccent(coalesce(new.name,''))), 'A') ||
        setweight(to_tsvector(unaccent(coalesce(new.product_id::text,''))), 'B') ||
        setweight(to_tsvector(unaccent(coalesce(new.description,''))), 'B');
    return new;
    end
    $$ LANGUAGE plpgsql;

    CREATE TRIGGER tsvectorupdate BEFORE INSERT OR UPDATE
    ON products FOR EACH ROW EXECUTE PROCEDURE products_trigger();

create index for text search vector column:

    CREATE INDEX tsvector_idx ON products USING GIN (tsv);

search with highlight:

    SELECT ts_headline(name, query) AS name, description
    FROM products, websearch_to_tsquery(unaccent('thinkpad')) query
    WHERE tsv @@ query
    ORDER BY ts_rank(tsv, query) DESC;

## Null

from SQL Antipatterns book:

Suppose Stan is thirty years old, while Oliver's age is unknown. If I ask
you whether Stan is older than Oliver, your only possible answer is "I
don't know." If I ask you whether Stan is the same age as Oliver, your
answer is also "I don't know." If I ask you what is the sum of Stan's age
and Oliver's age, your answer is the same.

null in scalar expressions:

| Expression         | Expected | Actual |
| ------------------ | -------- | ------ |
| NULL = 0           | TRUE     | NULL   |
| NULL = 12345       | FALSE    | NULL   |
| NULL <> 12345      | TRUE     | NULL   |
| NULL + 12345       | 12345    | NULL   |
| NULL \|\| 'string' | 'string' | NULL   |
| NULL = NULL        | TRUE     | NULL   |
| NULL <> NULL       | FALSE    | NULL   |

null in boolean expressions:

| Expression        | Expected | Actual |
| ----------------- | -------- | ------ |
| NULL AND TRUE     | FALSE    | NULL   |
| NULL AND FALSE    | FALSE    | FALSE  |
| NULL OR FALSE     | FALSE    | NULL   |
| NULL OR TRUE      | TRUE     | TRUE   |
| NOT (NULL)        | TRUE     | NULL   |

## Comments

    -- comment

## Recommendations

- Name primary keys `product_id` instead of just `id`
- Use table relationships instead of storing values in comma separated text
- Don't let data spawn metadata
- Avoid float if you can
- Use null to signify a missing value for any data type
- Define `NOT NULL` constraint on columns whose missing value could break application
- Always spell out all the columns you need, instead of relying on wildcards or implicit column lists
- Generate different salt for each password and save it in the same table

## Note sources

- <https://pragprog.com/titles/bksqla/sql-antipatterns/>
