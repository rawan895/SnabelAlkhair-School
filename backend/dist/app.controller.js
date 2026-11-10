"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let AppController = class AppController {
    users = [];
    getHello() {
        return 'Snabel Alkhair School API is running!';
    }
    register(body) {
        const { name, email, password } = body;
        if (!name || !email || !password || password.length < 6) {
            return {
                success: false,
                message: 'Please enter valid information.',
            };
        }
        const existingUser = this.users.find(user => user.email.toLowerCase() === email.toLowerCase());
        if (existingUser) {
            return {
                success: false,
                message: 'This email is already registered.',
            };
        }
        const salt = (0, crypto_1.randomBytes)(16).toString('hex');
        const passwordHash = (0, crypto_1.scryptSync)(password, salt, 64).toString('hex');
        this.users.push({ name, email, passwordHash, salt });
        return {
            success: true,
            message: 'Registration successful!',
        };
    }
    login(body) {
        const { email, password } = body;
        const user = this.users.find(user => user.email.toLowerCase() === email?.toLowerCase());
        if (!user || !password) {
            return {
                success: false,
                message: 'Invalid email or password.',
            };
        }
        const passwordHash = (0, crypto_1.scryptSync)(password, user.salt, 64);
        const storedHash = Buffer.from(user.passwordHash, 'hex');
        if (!(0, crypto_1.timingSafeEqual)(passwordHash, storedHash)) {
            return {
                success: false,
                message: 'Invalid email or password.',
            };
        }
        return {
            success: true,
            message: 'Login successful!',
            name: user.name,
            email: user.email,
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('auth/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map