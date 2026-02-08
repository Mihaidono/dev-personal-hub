# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm ci --legacy-peer-deps

# Copy all project files
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm ci --production --legacy-peer-deps

# Copy built Next.js files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/package.json ./package.json

# Expose port
EXPOSE 3000

# Start Next.js server
CMD ["npm", "run", "start"]
