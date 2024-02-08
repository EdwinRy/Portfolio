package main

import (
	"fmt"
	"net/http"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
}

func main() {
	port, found := GetEnv("SERVER_PORT")
	if !found {
		panic("SERVER_PORT not found")
	}

	http.HandleFunc("/", rootHandler)
	fmt.Println("Listening on port " + port)
	http.ListenAndServe(":"+port, nil)
}