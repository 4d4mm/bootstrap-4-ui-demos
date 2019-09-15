# UI implementation with bootstrap

The bootstrap scss included. Therefore, it allows the full control over bootstrap scss. For example, partial/custom builds for runtime package size optimizations and scss default overrides. Therefore the custom themes created are interportable. Which wouldn't be possible using `react-bootstrap` library. But it also worth a mention it doesn't align with the current React coding trends, which is much more leaning towards JSS, styled-comonents, etc.

Meanwhile, the bootstrap javascript components are outside of
the React echosystem, therefore the integration, and testing that integration could consume a significant amount of time.

Also the JSON Schema Forms library (`react-jsonschema-form-bs4`) is not ideal, because it should be a theme for the `react-jsonschema-form` package. Currently the official theme for bs4 is broken and fails to import. Because of the lack of interest, the official author seemingly abandoned the `react-jsonschema-form-theme-bs4` repo 6 moths before.

# The folder structure

```
components/ -> only visual
containers/ -> logic
schemas/ -> json schemas for forms and form UIs

```

# References

[1] https://github.com/peterkelly/react-jsonschema-form-bs4
[2] https://github.com/rjsf-team/react-jsonschema-form
[3] react-jsonschema-form-theme-bs4
