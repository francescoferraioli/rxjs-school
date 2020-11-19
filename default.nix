with (import <nixpkgs> {}); stdenv.mkDerivation rec {
  name = "env";

  env = buildEnv {
    name = name;
    paths = buildInputs;
  };

  buildInputs = [
    entr
    fd
    jq
    ripgrep
    yarn
  ];
}
