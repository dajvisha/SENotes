package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	var name string
	var addr string

	fmt.Print("Enter a name: ")
	fmt.Scan(&name)

	fmt.Print("Enter an address: ")
	fmt.Scan(&addr)

	userInfo := map[string]string{
		"name":    name,
		"address": addr,
	}

	binUserJSON, errMarshal := json.Marshal(userInfo)

	if errMarshal != nil {
		fmt.Println(errMarshal)
	}

	fmt.Println(string(binUserJSON[:]))
}
