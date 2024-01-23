package main

import (
	"os"
	"regexp"
)

var envFileVars map[string]string = nil

func parseEnvFile() {
	fil, err := os.ReadFile(".env")
	if err != nil {
		return
	}

	lines := regexp.MustCompile("\r?\n").Split(string(fil), -1)

	for _, line := range lines {
		// skip empty lines
		if len(line) == 0 {
			continue
		}

		vars := regexp.MustCompile("(.+)=(.+)$").FindStringSubmatch(line)
		if len(vars) == 3 {
			envFileVars[vars[1]] = vars[2]
		}
	}
}

func ensureEnvFileInit() {
	if envFileVars == nil {
		envFileVars = make(map[string]string)
		parseEnvFile()
	}
}

func getFileVar(env string) *string {
	ensureEnvFileInit()
	if val, found := envFileVars[env]; found {
		return &val
	}
	return nil
}

func GetEnv(env string) (value string, found bool) {
	envVar, isSet := os.LookupEnv(env)
	if !isSet {
		fileVar := getFileVar(env)
		return *fileVar, fileVar != nil
	}
	return envVar, isSet
}
