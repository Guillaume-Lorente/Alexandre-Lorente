// Dictionary shape, importable from both server and client code.
// The French dictionary defines the canonical structure; English mirrors it.
import type fr from './dictionaries/fr.json';

export type Dictionary = typeof fr;
