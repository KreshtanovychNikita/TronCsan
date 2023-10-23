
CREATE TABLE IF NOT EXISTS transactionss (
    id SERIAL PRIMARY KEY,
    transaction_id VARCHAR(255) NOT NULL,
    value DECIMAL(15, 6) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);

