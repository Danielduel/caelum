FROM cypress/included:9.6.1

RUN yarn add typescript
RUN yarn add axe-core
RUN yarn add cypress-axe
RUN yarn add cypress-image-snapshot
