FRONT_1 = app-vue
FRONT_2 = app-vue2
PROJECT_DIR = ${PWD}

# Команды для запуска
.PHONY: all install otherprojects clean microfrontend start-all

# Основная команда для установки и запуска
all: install microfrontend

install:
	@echo "Installing dependencies for the main project..."
	cd $(PROJECT_DIR) && npm install
	@echo "Installing dependencies for otherproject1..."
	cd $(FRONT_2) && npm install
	@echo "Installing dependencies for otherproject2..."
	cd $(FRONT_1) && npm install

microfrontend: front1-start front2-start root-config-start

front1-start:
	@echo "Starting app-vue..."
	cd $(FRONT_1) && npm run dev

front2-start:
	@echo "Starting app-vue2..."
	cd $(FRONT_2) && npm run dev

root-config-start:
	@echo "Starting root..."
	cd $(PROJECT_DIR) && npm run dev

start-all: install microfrontend
