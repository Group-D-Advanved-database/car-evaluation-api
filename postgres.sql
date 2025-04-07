--Create tables schema
CREATE TABLE car (
    car_id SERIAL PRIMARY KEY,
    buying VARCHAR(10),
    maint VARCHAR(10),
    doors VARCHAR(10),
    persons VARCHAR(10),
    lug_boot VARCHAR(10),
    safety VARCHAR(10),
    class VARCHAR(10)
);

-- Create index on columns
CREATE INDEX idx_class ON car(class);
CREATE INDEX idx_buying ON car(buying);
CREATE INDEX idx_order_date ON orders(order_date);

-- Stored Procedure to get total sales
CREATE OR REPLACE FUNCTION get_total_sales(start_date DATE, end_date DATE)
RETURNS TABLE(car_class VARCHAR, total_quantity INT) AS $$
BEGIN
    RETURN QUERY
    SELECT car_class, SUM(quantity) AS total_quantity
    FROM orders
    WHERE order_date BETWEEN start_date AND end_date
    GROUP BY car_class;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update inventory
CREATE OR REPLACE FUNCTION update_inventory_after_order()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE inventory
    SET stock = stock - NEW.quantity
    WHERE car_class = NEW.car_class;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_inventory
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION update_inventory_after_order();
