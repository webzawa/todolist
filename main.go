package main

import (
	"fmt"

	"codebrains.io/todolist/database"
	"codebrains.io/todolist/models"
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func helloworld(c *fiber.Ctx) error {
	return c.SendString("Hello world")
}

func initDatabase() {
	var err error
	dsn := "host=localhost user=postgres password=postgres dbname=gotodo port=5432"
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database!")
	}
	fmt.Println("Database connected!")
	database.DBConn.AutoMigrate(&models.Todo{})
	fmt.Println("Migrated DB")
}

func setRoutes(app *fiber.App) {
	app.Get("/todos", models.GetTodos)
}

func main() {
	app := fiber.New()
	initDatabase()
	app.Get("/", helloworld)
	setRoutes(app)
	app.Listen(":8000")
}
