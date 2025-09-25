# $IMAX OSRS Tracker

A Next.js website tracking Iron Prezzy's OSRS journey tied to the $IMAX token.

## Deployment Guide

### Publishing to Vercel (Recommended)

1. **From v0 Interface:**
   - Click the "Publish" button in the top right of the v0 interface
   - This will automatically deploy to Vercel

2. **Manual Deployment:**
   - Push code to GitHub using the GitHub button in v0
   - Connect your GitHub repo to Vercel
   - Deploy automatically

### Post-Launch Token Integration

When $IMAX token launches, update these files:

#### 1. Update API Route (`app/api/crypto/price/route.ts`)
\`\`\`typescript
// Replace the prelaunchImaxData with real API calls
const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`)
// Or use your preferred price API
\`\`\`

#### 2. Update Environment Variables
Add to your Vercel project settings:
- `IMAX_CONTRACT_ADDRESS` - Your token contract address
- `PRICE_API_KEY` - If using a paid API service

#### 3. Update Live Stream Section
In `components/live-updates.tsx`:
- Replace the "Coming Soon" badge with "🔴 LIVE"
- Update the stream embed with your actual stream URL
- Enable the "Watch on PumpFun" button

### Current Status
- ✅ Pre-launch ready with zero token data
- ✅ OSRS tracking functional
- ✅ Deployment optimized
- 🔄 Awaiting token launch for live data integration

### Troubleshooting Deployment
If deployment fails:
1. Check that all API routes return valid JSON
2. Ensure no client-side code runs during build
3. Verify all imports are correct
4. Check Vercel build logs for specific errors
