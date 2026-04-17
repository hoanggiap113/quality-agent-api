export default () => ({
  port: parseInt(process.env.PORT || "5434", 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "chat-quality-agent", 10) || 5432
  }
});
