import { TestBed } from '@angular/core/testing';

type CompilerOptions = Partial<{
  providers: any[];
  useJit: boolean;
  preserveWhitespaces: boolean;
}>;
export type ConfigureFunction = (testBed: typeof TestBed) => void;

export const configureTests = (
  configure: ConfigureFunction,
  compilerOptions: CompilerOptions = {},
) => {
  const compilerConfig: CompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  };

  const configuredTestBed = TestBed.configureCompiler(compilerConfig);

  configure(configuredTestBed);

  return configuredTestBed.compileComponents().then(() => configuredTestBed);
};
