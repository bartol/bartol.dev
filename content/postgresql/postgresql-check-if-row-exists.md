# PostgreSQL check if row exists

	SELECT EXISTS(SELECT 1 FROM items WHERE item_id = 12);
