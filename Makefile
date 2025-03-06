FRONT_1 = app-vue
FRONT_2 = app-vue2
PROJECT_DIR = ${PWD}

install:
	@echo "Installing dependencies for the main project..."
	cd $(PROJECT_DIR) && npm install
	@echo "Installing dependencies for otherproject1..."
	cd $(FRONT_2) && npm install
	@echo "Installing dependencies for otherproject2..."
	cd $(FRONT_1) && npm install

front1-dev:
	@echo "Starting app-vue..."
	cd $(FRONT_1) && npm run dev

front2-dev:
	@echo "Starting app-vue2..."
	cd $(FRONT_2) && npm run dev

root-config-dev:
	@echo "Starting root..."
	cd $(PROJECT_DIR) && npm run dev



front1-build-preview:
	@echo "Starting app-vue..."
	cd $(FRONT_1) && npm run watch

front2-build-preview:
	@echo "Starting app-vue..."
	cd $(FRONT_2) && npm run watch

root-config-build-preview:
	@echo "Starting app-vue..."
	cd $(PROJECT_DIR) && npm run build
	cd $(PROJECT_DIR) && npm run preview


